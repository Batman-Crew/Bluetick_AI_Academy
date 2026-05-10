import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  const html = readFileSync(
    join(process.cwd(), "src/components/product_manager/product_manager.html"),
    "utf-8"
  );
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
