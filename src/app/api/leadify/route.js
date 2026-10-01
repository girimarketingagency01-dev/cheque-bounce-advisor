export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let body;
    let headers = {};

    if (contentType.includes("multipart/form-data")) {
      const incomingFormData = await request.formData();

      const formData = new FormData();

      for (const [key, value] of incomingFormData.entries()) {
        formData.append(key, value);
      }

      body = formData;
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

    const responseText = await response.text();

    let data;

    try {
      data = JSON.parse(responseText);
    } catch {
      data = {
        success: false,
        message: responseText || "Leadify returned an invalid response.",
      };
    }

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