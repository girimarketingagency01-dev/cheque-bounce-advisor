export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://chequebounceadvisor.com/wp-json/leadify/v1/lead",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
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