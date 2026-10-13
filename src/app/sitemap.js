
const BASE_URL = "https://chequebounceadvisor.com";

export default function sitemap() {
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

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}