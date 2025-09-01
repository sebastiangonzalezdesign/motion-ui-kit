import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers - Allow your portfolio domain and motion subdomain
  const allowedOrigins = [
    'https://sebastiangonzalez.design',
    'https://motion.sebastiangonzalez.design',
    'http://localhost:3000', // For local testing
    'http://localhost:5173', // For local Vite dev
  ];

  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Send notification to you
    await resend.emails.send({
      from: 'Motion UI Kit <noreply@sebastiangonzalez.design>', // Use your verified domain
      to: ['hello@sebastiangonzalez.design'], // Your email
      subject: 'New MUIK Pro Signup',
      html: `
        <h2>New Motion UI Kit Pro Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toISOString()}</p>
        <p><strong>Source:</strong> Portfolio Landing Page</p>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: 'Sebastian <hello@sebastiangonzalez.design>', // Use your verified domain
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

    res.status(200).json({ success: true, message: 'Successfully signed up!' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Failed to process signup' });
  }
}
