import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Gmail credentials — server-side only, never exposed to browser.
// Firebase webframeworks (Cloud Functions v2) does not pass env vars to the
// running container, so we use hardcoded fallbacks as a reliable workaround.
const EMAIL_USER = process.env.EMAIL_USER || "artexplore764@gmail.com";
const EMAIL_PASS = process.env.EMAIL_PASS || "jihe sqwv meea jela";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { instituteName, ownerName, whatsapp, category, students, notes } = body;

    // Validate request body
    if (!instituteName || !ownerName || !whatsapp) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });


    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          .header { background-color: #4F46E5; color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
          .content { padding: 30px; color: #334155; }
          .detail-row { margin-bottom: 20px; border-bottom: 1px solid #f1f5f9; padding-bottom: 15px; }
          .detail-row:last-child { border-bottom: none; }
          .label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 600; margin-bottom: 5px; display: block; }
          .value { font-size: 16px; font-weight: 500; color: #0f172a; margin: 0; }
          .notes-box { background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #4F46E5; margin-top: 10px; }
          .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 13px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Demo Request! 🚀</h1>
          </div>
          <div class="content">
            <div class="detail-row">
              <span class="label">Institute Name</span>
              <p class="value">${instituteName}</p>
            </div>
            <div class="detail-row">
              <span class="label">Contact Person</span>
              <p class="value">${ownerName}</p>
            </div>
            <div class="detail-row">
              <span class="label">WhatsApp Number</span>
              <p class="value">${whatsapp}</p>
            </div>
            <div class="detail-row">
              <span class="label">Category</span>
              <p class="value">${category}</p>
            </div>
            <div class="detail-row">
              <span class="label">Active Students</span>
              <p class="value">${students}</p>
            </div>
            ${notes ? `
            <div class="detail-row">
              <span class="label">Additional Notes</span>
              <div class="notes-box">
                <p class="value">${notes}</p>
              </div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This email was automatically generated from your FeeSync website form via Next.js API using Nodemailer.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"FeeSync Notifications" <${EMAIL_USER}>`,
      to: "artexplore764@gmail.com",
      subject: `🔥 New Demo Request: ${instituteName}`,
      html: htmlContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email in API route:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
