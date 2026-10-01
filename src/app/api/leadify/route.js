export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    const body = await request.arrayBuffer();

    const headers = {
      "Content-Type": contentType,
    };

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