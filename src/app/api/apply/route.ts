import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const message = formData.get('message') as string;
    const cv = formData.get('cv') as File | null;

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: 'Name and at least one contact info (phone or email) is required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.yandex.com.tr', 
      port: Number(process.env.SMTP_PORT) || 465,       
      secure: true, 
      auth: {
        user: process.env.SMTP_USER || 'info@nivdent.com',
        pass: process.env.SMTP_PASS || 'Nvds456+', 
      },
    });

    // Prepare attachments array if CV is provided
    let attachments = [];
    if (cv && cv.size > 0) {
      const buffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({
        filename: cv.name,
        content: buffer,
        contentType: cv.type,
      });
    }

    const mailOptions = {
      from: '"Nivdent HR Form" <info@nivdent.com>',
      to: 'info@nivdent.com', // CVs go to the same address or an HR address, defaulting to info
      subject: `New Job Application: ${name} - Career`,
      text: `
        You have received a new job application from your website.
        
        Candidate: ${name}
        Position Applied For: ${position || 'Not specified'}
        Email: ${email || 'Not specified'}
        Phone: ${phone || 'Not specified'}
        
        Cover Letter / Message: 
        ${message || 'Not specified'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #0b1e46;">New Job Application (Career Form)</h2>
            <p><strong>Candidate Full Name:</strong> ${name}</p>
            <p><strong>Interested Position:</strong> ${position || 'Not specified'}</p>
            <p><strong>Email:</strong> ${email || 'Not specified'}</p>
            <p><strong>Phone Number:</strong> ${phone || 'Not specified'}</p>
            <hr />
            <p><strong>Cover Letter / Message:</strong></p>
            <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message || 'Not specified'}</pre>
            ${cv ? '<p><em>The candidate\'s CV file is attached.</em></p>' : '<p><em>The candidate did not upload a CV.</em></p>'}
        </div>
      `,
      attachments: attachments,
    };

    // Send the email with primary SMTP
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, message: 'Your application has been received successfully.' });
    } catch (primaryError) {
        console.warn("Primary SMTP sending failed, falling back to unencrypted API (FormSubmit)...", primaryError);
        
        // Fallback for FormSubmit without attachments support out-of-the-box easily for free tier multipart, 
        // but we'll send the text at least.
        const response = await fetch(`https://formsubmit.co/ajax/info@nivdent.com`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                position: position || "Not specified",
                email: email || "Not specified",
                phone: phone || "Not specified",
                message: message || "Not specified",
                warning: cv ? "WARNING: The candidate uploaded a CV to the system, but the attachment could not be received because it was sent from the backup system!" : "CV not uploaded.",
                _subject: `New Job Application: ${name} (BACKUP SYSTEM)`,
                _template: "table"
            })
        });

        const result = await response.json();

        if (result.success === "true" || result.success === true) {
            return NextResponse.json({ success: true, message: 'Your application was received successfully, but your CV attachment may not have been included due to the backup server.' });
        } else {
            throw new Error("Both primary server and backup API sending failed.");
        }
    }

  } catch (error) {
    console.error('Error in route:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting your application. Please try again later.' },
      { status: 500 }
    );
  }
}
