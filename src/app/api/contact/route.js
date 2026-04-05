import { Resend } from 'resend';
import { NextResponse } from 'next/server';

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email, phone, subject, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        await resend.emails.send({
            from: 'NAVJ Website <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL_TO,
            replyTo: email,
            subject: `[NAVJ Website] ${subject || 'General Inquiry'}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Phone: ${phone || 'Not provided'}`,
                `Subject: ${subject || 'General Inquiry'}`,
                '',
                'Message:',
                message,
            ].join('\n'),
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px;">
                    <h2 style="color: #0a192f; border-bottom: 2px solid #C5A059; padding-bottom: 0.5rem;">
                        New Inquiry: NAVJ Website
                    </h2>
                    <table style="width:100%; border-collapse: collapse; margin-top: 1rem;">
                        <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td><td>${escapeHtml(name)}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td>${escapeHtml(phone || 'Not provided')}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Subject</td><td>${escapeHtml(subject || 'General Inquiry')}</td></tr>
                    </table>
                    <div style="margin-top: 1.5rem; background: #f8f5f0; padding: 1rem; border-radius: 4px;">
                        <strong>Message:</strong>
                        <p style="white-space: pre-wrap; margin-top: 0.5rem;">${escapeHtml(message)}</p>
                    </div>
                    <p style="margin-top: 2rem; font-size: 0.75rem; color: #888;">
                        Sent from navjco.com contact form
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Contact form error:', err);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
