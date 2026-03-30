import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, projectType, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Arise Builders <onboarding@resend.dev>",
      to: "arisebuilders.blr@gmail.com",
      replyTo: email || undefined,
      subject: `New Inquiry from ${name} — ${projectType || "General"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C8956C; border-bottom: 1px solid #eee; padding-bottom: 12px;">
            New Project Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 120px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Phone</td>
              <td style="padding: 8px 0; font-weight: 600;">${phone}</td>
            </tr>
            ${email ? `<tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;">${email}</td></tr>` : ""}
            ${projectType ? `<tr><td style="padding: 8px 0; color: #888;">Project Type</td><td style="padding: 8px 0;">${projectType}</td></tr>` : ""}
          </table>
          ${message ? `<div style="margin-top: 16px; padding: 16px; background: #f9f8f5; border-radius: 8px;"><p style="color: #888; margin: 0 0 4px; font-size: 13px;">Message</p><p style="margin: 0;">${message}</p></div>` : ""}
          <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
            Sent from arisebuilders.vercel.app
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
