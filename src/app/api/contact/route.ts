import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Transporter config from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    const info = await transporter.sendMail({
      from: `${name} <${email}>`,
      to,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p>From: <strong>${name}</strong> &lt;${email}&gt;</p><div>${message
        .replace(/\n/g, "<br/>")
        }</div>`,
    });

    return NextResponse.json({ ok: true, message: "Email sent", info });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("/api/contact error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
