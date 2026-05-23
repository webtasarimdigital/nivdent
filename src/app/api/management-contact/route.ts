import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Basic server-side validation
    if (!name || (!phone && !email) || !message) {
      return NextResponse.json(
        { error: 'Name, message, and at least one contact info (phone or email) is required.' },
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
      from: '"Nivdent Management" <info@nivdent.com>', // Sender address
      to: 'ahmed.dursun@nivdent.com',              // Receiver address (CEO)
      subject: `New Message to the Board of Directors: ${name}`,
      text: `
        You have received a new response to the Board of Directors form from your website.
        
        Full Name: ${name}
        Email: ${email || 'Not specified'}
        Phone: ${phone || 'Not specified'}
        Message / Details: 
        ${message || 'Not specified'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #0b1e46;">New Message from the Board of Directors Form</h2>
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email || 'Not specified'}</p>
            <p><strong>Phone Number:</strong> ${phone || 'Not specified'}</p>
            <hr />
            <p><strong>Message Details:</strong></p>
            <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message || 'Not specified'}</pre>
        </div>
      `,
    };

    // Send the email with primary SMTP
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Your message has been sent successfully.' });

  } catch (error) {
    console.error('Error in yonetim-contact route:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending the email. Please try again later.' },
      { status: 500 }
    );
  }
}
