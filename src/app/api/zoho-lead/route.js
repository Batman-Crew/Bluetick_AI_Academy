import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // Refresh Zoho Access Token
    const tokenRes = await fetch(
      `https://accounts.zoho.in/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`,
      { method: "POST" }
    );

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      console.error("Token Refresh Failed:", tokenData);
      return NextResponse.json(
        { success: false, error: "Failed to refresh Zoho access token" },
        { status: 500 }
      );
    }

    // Identify Form Type
    const formType = body.formType || "default";

    let leadSource = "Website Form";
    let leadSourceDetail = "Website Learning Form";
    let description = `Learning Mode: ${body.learningMode || ""}, Coding Experience: ${body.codingExperience || ""}`;

    if (formType === "hire") {
      leadSource = "Hire From Us";
      leadSourceDetail = "Hire From Us Form";
      description = `Hire enquiry from ${body.name} - ${body.company || ""}`;
    }

    if (formType === "franchisee") {
      leadSource = "Franchisee Enquiry";
      leadSourceDetail = "Franchisee Enquiry Form";
      description = `Franchise enquiry from ${body.name} - ${body.location || ""}`;
    }

    if (formType === "newsletter") {
      leadSource = "Newsletter Signup";
      leadSourceDetail = "Website Footer Newsletter";
      description = `Newsletter signup from ${body.email}`;
      body.name = body.email.split("@")[0] || "Subscriber";
    }

    // Build Zoho Bigin Payload
    const payload = {
      data: [
        {
          Last_Name: body.name || "Lead",
          Email: body.email || "",
          Phone: body.mobile || "",
          Center: body.center || "",
          Learning_Mode: body.learningMode || "",
          Company_Name: body.company || "",
          Location: body.location || "",
          Form_Type: formType,
          Lead_Source: leadSource,
          Lead_Source_Detail: leadSourceDetail,
          Website: "AI Academy",
          Description: description,
        },
      ],
      duplicate_check_fields: ["Email", "Phone"],
    };

    console.log("Payload to Zoho Bigin:", JSON.stringify(payload, null, 2));

    // Send Data to Zoho Bigin (upsert: update if duplicate, create if new)
    const zohoRes = await fetch("https://www.zohoapis.in/bigin/v2/Contacts/upsert", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await zohoRes.json();
    console.log("Zoho Bigin Response:", result);

    if (result?.data?.[0]?.code === "SUCCESS") {
      return NextResponse.json({
        success: true,
        message: "Lead successfully added to Zoho Bigin",
      });
    }

    return NextResponse.json(
      { success: false, error: result },
      { status: 400 }
    );
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
