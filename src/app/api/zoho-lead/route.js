import { NextResponse } from 'next/server';

// Zoho CRM API endpoint
const ZOHO_API_DOMAIN = process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.in';
const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;

// Token cache to avoid requesting a new token for every request
let accessTokenCache = {
  token: null,
  expiresAt: null,
};

/**
 * Get Zoho CRM Access Token
 */
async function getAccessToken() {
  // Check if we have a valid cached token
  if (accessTokenCache.token && accessTokenCache.expiresAt > Date.now()) {
    console.log('Using cached access token');
    return accessTokenCache.token;
  }

  console.log('Requesting new access token from Zoho...');
  

  try {
    const tokenUrl = `https://accounts.zoho.in/oauth/v2/token`;
    const params = new URLSearchParams({
      refresh_token: ZOHO_REFRESH_TOKEN,
      client_id: ZOHO_CLIENT_ID,
      client_secret: ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token',
    });

    const response = await fetch(`${tokenUrl}?${params}`, {
      method: 'POST',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get access token: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    if (!data.access_token) {
      throw new Error('No access token in response');
    }

    // Cache the token (expires in 1 hour, cache for 55 minutes)
    accessTokenCache = {
      token: data.access_token,
      expiresAt: Date.now() + (55 * 60 * 1000),
    };

    console.log('Successfully obtained new access token');
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

/**
 * Create Lead in Zoho CRM
 */
async function createZohoLead(leadData, accessToken) {
  const zohoLeadUrl = `${ZOHO_API_DOMAIN}/crm/v2/Leads`;

  // Map form data to Zoho CRM Lead fields
  const zohoData = {
    data: [
      {
        Last_Name: leadData.name || 'Unknown',
        Email: leadData.email,
        Phone: leadData.mobile,
        Company: leadData.company || 'Bluetick Academy Lead',
        Lead_Source: 'Website Form',
        Description: `
Form Type: ${leadData.formType || 'default'}
Learning Mode: ${leadData.learningMode || 'N/A'}
Coding Experience: ${leadData.codingExperience || 'N/A'}
Location: ${leadData.location || 'N/A'}
        `.trim(),
      },
    ],
  };

  console.log('Creating lead in Zoho CRM:', JSON.stringify(zohoData, null, 2));

  try {
    const response = await fetch(zohoLeadUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zohoData),
    });

    const responseData = await response.json();
    console.log('Zoho CRM Response:', JSON.stringify(responseData, null, 2));

    if (!response.ok) {
      // Check for OAuth scope error
      if (responseData.code === 'OAUTH_SCOPE_MISMATCH') {
        throw new Error('OAuth scope error: Your Zoho refresh token needs the following scopes: ZohoCRM.modules.ALL,ZohoCRM.settings.ALL. Please regenerate your refresh token with correct scopes. See ZOHO_SETUP_GUIDE.md');
      }
      throw new Error(`Zoho CRM API error: ${response.status} - ${JSON.stringify(responseData)}`);
    }

    return responseData;
  } catch (error) {
    console.error('Error creating Zoho lead:', error);
    throw error;
  }
}

/**
 * POST /api/zoho-lead
 * Creates a lead in Zoho CRM
 */
export async function POST(request) {
  try {
    // Validate environment variables
    if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
      console.error('Missing Zoho credentials in environment variables');
      return NextResponse.json(
        {
          success: false,
          error: 'Server configuration error. Please contact support.'
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('Received form submission:', body);

    // Validate required fields
    if (!body.name || !body.email || !body.mobile) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: name, email, or mobile'
        },
        { status: 400 }
      );
    }

    // Get access token
    const accessToken = await getAccessToken();

    // Create lead in Zoho CRM
    const zohoResponse = await createZohoLead(body, accessToken);

    // Check if lead was created successfully
    if (zohoResponse.data && zohoResponse.data[0]?.code === 'SUCCESS') {
      return NextResponse.json({
        success: true,
        message: 'Lead created successfully in Zoho CRM',
        zohoId: zohoResponse.data[0]?.details?.id,
      });
    } else {
      throw new Error('Failed to create lead in Zoho CRM');
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to process your request. Please try again.'
      },
      { status: 500 }
    );
  }
}
