javascript
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const BASE_URL = "https://chequebounceadvisor.com";
const WORDPRESS_API =
  "https://chequebounceadvisor.com/old-web/wp-json/wp/v2/posts";

const routes = [
  "",
  "/about-us",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms-and-conditions",
  "/service",
  "/service/bank-nbfc",
  "/service/bank-nbfc/cheque-bounce",
  "/service/bank-nbfc/cheque-misuse",
  "/service/business",
  "/service/business/cheque-bounce",
  "/service/business/cheque-misuse",
  "/service/individual",
  "/service/individual/cheque-bounce",
  "/service/individual/cheque-misuse",
  "/blog",
];

export async function GET() {
  const urls = routes.map((route) => ({
    loc: `${BASE_URL}${route}`,
    lastmod: new Date().toISOString(),
  }));

  try {
    const response = await fetch(
      `${WORDPRESS_API}?per_page=100&_fields=slug,modified_gmt,date`,
      { cache: "no-store" }
    );

    if (response.ok) {
      const posts = await response.json();

      if (Array.isArray(posts)) {
        for (const post of posts) {
          if (!post.slug) continue;

          urls.push({
            loc: `${BASE_URL}/blog/${post.slug}`,
            lastmod:
              post.modified_gmt ||
              post.date ||
              new Date().toISOString(),
          });
        }
      }
    } else {
      console.error("Sitemap WordPress API status:", response.status);
    }
  } catch (error) {
    console.error("Sitemap WordPress fetch failed:", error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}

