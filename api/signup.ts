import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers for all responses
  const allowedOrigins = [
    'https://sebastiangonzalez.design',
    'https://motion.sebastiangonzalez.design',
    'http://localhost:3000',
    'http://localhost:5173',
  ];

  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Fallback for testing
    res.setHeader('Access-Control-Allow-Origin', 'https://sebastiangonzalez.design');
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    console.log('Processing signup for:', email);

    // Send notification to you
    const notificationResult = await resend.emails.send({
      from: 'Motion UI Kit <noreply@sebastiangonzalez.design>',
      to: ['hello@sebastiangonzalez.design'],
      subject: 'New MUIK Pro Signup',
      html: `
        <h2>New Motion UI Kit Pro Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toISOString()}</p>
        <p><strong>Source:</strong> Portfolio Landing Page</p>
      `,
    });

    console.log('Notification sent:', notificationResult.data?.id);

    // Send confirmation to user
    const confirmationResult = await resend.emails.send({
      from: 'Sebastian <hello@sebastiangonzalez.design>',
      to: [email],
      subject: 'Thanks for joining Motion UI Kit Pro early access! 🎉',
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
          <h1 style="color: #3B82F6;">You're on the list! 🎉</h1>
          <p>Hi there,</p>
          <p>Thanks for signing up for early access to Motion UI Kit Pro!</p>
          <p>I'll notify you as soon as it's ready with:</p>
          <ul>
            <li>8+ advanced motion components</li>
            <li>Custom themes & advanced animations</li>
            <li>Complete documentation + Figma files</li>
            <li>Priority support</li>
          </ul>
          <p>In the meantime, feel free to explore the <a href="https://motion-ui-kit.vercel.app" style="color: #3B82F6;">free demo</a>!</p>
          <p>Best,<br>Sebastian</p>
        </div>
      `,
    });

    console.log('Confirmation sent:', confirmationResult.data?.id);

    return res.status(200).json({
      success: true,
      message: 'Successfully signed up!',
      notificationId: notificationResult.data?.id,
      confirmationId: confirmationResult.data?.id,
    });
  } catch (error) {
    console.error('Signup error:', error);

    // More specific error handling
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }

    return res.status(500).json({
      error: 'Failed to process signup',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
