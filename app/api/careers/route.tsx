import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File | null;

    if (!name || !email || !position || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Convert the file to Buffer for nodemailer
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_USER,
      subject: `Job Application: ${position} - ${name}`,
      text: `
Job Application Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Position: ${position}
Experience: ${experience}

Cover Letter:
${coverLetter}
            `,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #c9a227; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">New Job Application</h2>
          <div style="margin-top: 20px; background-color: #fcfcfc; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Experience:</strong> ${experience}</p>
          </div>
          <div style="margin-top: 20px;">
            <p><strong>Cover Letter:</strong></p>
            <p style="white-space: pre-wrap; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #c9a227; font-style: italic;">${coverLetter}</p>
          </div>
          <p style="margin-top: 20px; font-size: 13px; color: #666;">The applicant's resume is attached to this email.</p>
          <div style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            <p>Sent from SAAR Group Careers Portal</p>
          </div>
        </div>
            `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Careers API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    );
  }
}
