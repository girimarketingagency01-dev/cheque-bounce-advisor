import nodemailer from "nodemailer";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      language,
      name,
      matter,
      state,
      phone,
      email,
    } = body;

    if (!name || !matter || !state || !phone || !email) {
      return Response.json(
        {
          success: false,
          message: "Required lead details are missing.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.CBA_SMTP_HOST,
      port: Number(process.env.CBA_SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.CBA_SMTP_USER,
        pass: process.env.CBA_SMTP_PASSWORD,
      },
    });

    const safeName = escapeHtml(name);
    const safeLanguage = escapeHtml(language || "Not specified");
    const safeMatter = escapeHtml(matter);
    const safeState = escapeHtml(state);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    await transporter.sendMail({
      from: `"Cheque Bounce Advisor" <${process.env.CBA_SMTP_USER}>`,
      to: process.env.CBA_LEAD_EMAIL,
      replyTo: email,
      subject: `New CBA Lead - ${name} - ${matter}`,

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New CBA Lead</title>
        </head>

        <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">

          <div style="max-width:650px;margin:30px auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #eeeeee;">

            <!-- Header -->
            <div style="background:#d71920;padding:24px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:25px;">
                Cheque Bounce Advisor
              </h1>

              <p style="margin:8px 0 0;color:#ffffff;font-size:14px;">
                New Chat Lead Received
              </p>
            </div>

            <!-- Content -->
            <div style="padding:28px;">

              <h2 style="margin:0 0 20px;color:#222222;font-size:21px;">
                New CBA Lead
              </h2>

              <table style="width:100%;border-collapse:collapse;font-size:15px;">

                <tr>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;color:#777;font-weight:bold;">
                    Name
                  </td>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;color:#222;">
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;color:#777;font-weight:bold;">
                    Language
                  </td>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;color:#222;">
                    ${safeLanguage}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;color:#777;font-weight:bold;">
                    Matter
                  </td>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;color:#222;">
                    ${safeMatter}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;color:#777;font-weight:bold;">
                    State
                  </td>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;color:#222;">
                    ${safeState}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;color:#777;font-weight:bold;">
                    Phone
                  </td>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;">
                    <a href="tel:${safePhone}" style="color:#d71920;font-weight:bold;text-decoration:none;">
                      ${safePhone}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;color:#777;font-weight:bold;">
                    Email
                  </td>
                  <td style="padding:12px 8px;border-bottom:1px solid #eeeeee;">
                    <a href="mailto:${safeEmail}" style="color:#d71920;text-decoration:none;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 8px;color:#777;font-weight:bold;">
                    Submitted
                  </td>
                  <td style="padding:12px 8px;color:#222;">
                    ${submittedAt}
                  </td>
                </tr>

              </table>

              <!-- Buttons -->
              <div style="text-align:center;margin-top:28px;">

                <a
                  href="tel:${safePhone}"
                  style="display:inline-block;background:#d71920;color:#ffffff;text-decoration:none;padding:13px 24px;border-radius:8px;font-weight:bold;margin:5px;"
                >
                  Call Lead
                </a>

                <a
                  href="mailto:${safeEmail}"
                  style="display:inline-block;background:#222222;color:#ffffff;text-decoration:none;padding:13px 24px;border-radius:8px;font-weight:bold;margin:5px;"
                >
                  Email Lead
                </a>

              </div>

            </div>

            <!-- Footer -->
            <div style="background:#f8f8f8;padding:18px;text-align:center;">
              <p style="margin:0;color:#888;font-size:12px;">
                This lead was submitted through the Cheque Bounce Advisor website chat.
              </p>
            </div>

          </div>

        </body>
        </html>
      `,
    });

    return Response.json({
      success: true,
      message: "Lead email sent successfully.",
    });
  } catch (error) {
    console.error("CBA Lead Email Error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to send lead email.",
      },
      { status: 500 }
    );
  }
}