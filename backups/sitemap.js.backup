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

async function getPublishedBlogs() {
const postsPerPage = 100;
const maxPages = 50;
const blogPages = [];

try {
for (let page = 1; page <= maxPages; page++) {
const url = new URL(WORDPRESS_API);


  url.searchParams.set("per_page", String(postsPerPage));
  url.searchParams.set("page", String(page));
  url.searchParams.set("status", "publish");
  url.searchParams.set(
    "_fields",
    "slug,modified_gmt,date"
  );

  const response = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });

  if (response.status === 400 && page > 1) {
    break;
  }

  if (!response.ok) {
    console.error(
      `Sitemap: WordPress API returned status ${response.status}`
    );
    break;
  }

  const posts = await response.json();

  if (!Array.isArray(posts) || posts.length === 0) {
    break;
  }

  for (const post of posts) {
    if (!post.slug) continue;

    const lastModified =
      post.modified_gmt || post.date;

    blogPages.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      ...(lastModified &&
        !Number.isNaN(Date.parse(lastModified)) && {
          lastModified: new Date(lastModified),
        }),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  if (posts.length < postsPerPage) {
    break;
  }
}


} catch {
console.error("Sitemap: Unable to fetch WordPress blogs");
}

return blogPages;
}

export default async function sitemap() {
const staticPages = routes.map((route) => ({
url: `${BASE_URL}${route}`,
changeFrequency: "weekly",
priority: route === "" ? 1 : 0.7,
}));

const blogPages = await getPublishedBlogs();

return [...staticPages, ...blogPages];
}
