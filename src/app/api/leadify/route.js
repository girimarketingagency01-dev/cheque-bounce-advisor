export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let body;
    let headers = {};

    if (contentType.includes("multipart/form-data")) {
      body = await request.formData();
    } else {
      body = await request.text();

      headers["Content-Type"] =
        request.headers.get("content-type") ||
        "application/json";
    }

    const response = await fetch(
      "https://chequebounceadvisor.com/old-web/wp-json/leadify/v1/lead",
      {
        method: "POST",
        headers,
        body,
        cache: "no-store",
      }
    );

    const data = await response.json();

    return Response.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Leadify Proxy Error:", error);

    return Response.json(
      {
        success: false,
        message: "Could not connect to Leadify.",
      },
      {
        status: 500,
      }
    );
  }
}