import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Basic server-side validation
    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: 'Name and at least one contact info (phone or email) is required.' },
        { status: 400 }
      );
    }

    // Vercel Serverless Compatible - Encrypted Yandex SMTP Sending (Guaranteed Method)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.yandex.com.tr', 
      port: Number(process.env.SMTP_PORT) || 465,       
      secure: true, 
      auth: {
        user: process.env.SMTP_USER || 'info@nivdent.com',
        pass: process.env.SMTP_PASS || 'Nvds456+', 
      },
    });

    const mailOptions = {
      from: '"Nivdent Web Form" <info@nivdent.com>', // Sender address
      to: 'info@nivdent.com',                        // Receiver address (the clinic)
      subject: `New Web Form Request: ${name}`,
      text: `
        You have received a new form response from your website.
        
        Full Name / Institution: ${name}
        Email: ${email || 'Not specified'}
        Phone: ${phone || 'Not specified'}
        Message / Details: 
        ${message || 'Not specified'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #0b1e46;">New Form Received from Your Website</h2>
            <p><strong>Full Name / Institution:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email || 'Not specified'}</p>
            <p><strong>Phone Number:</strong> ${phone || 'Not specified'}</p>
            <hr />
            <p><strong>Message / Form Details:</strong></p>
            <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message || 'Not specified'}</pre>
        </div>
      `,
    };

    // Send the email with primary SMTP
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, message: 'Your message has been sent successfully.' });
    } catch (primaryError) {
        console.warn("Primary SMTP sending failed, falling back to unencrypted API (FormSubmit)...", primaryError);
        
        // Fallback: Vercel Serverless Compatible Unencrypted Mail Sending System (FormSubmit)
        const response = await fetch(`https://formsubmit.co/ajax/info@nivdent.com`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email || "Not specified",
                phone: phone || "Not specified",
                message: message || "Not specified",
                _subject: `New Form Request: ${name} (BACKUP SYSTEM)`,
                _template: "table"
            })
        });

        const result = await response.json();

        if (result.success === "true" || result.success === true) {
            return NextResponse.json({ success: true, message: 'Your message has been sent successfully.' });
        } else {
            throw new Error("Both primary server and backup API sending failed.");
        }
    }

  } catch (error) {
    console.error('Error in route:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending the email. Please try again later.' },
      { status: 500 }
    );
  }
}
