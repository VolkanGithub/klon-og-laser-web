import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ message: 'Lütfen tüm alanları doldurunuz.' });
  }

  // SMTP Transporter Ayarları
  // Bu bilgileri .env.local dosyasından çekeceğiz (Güvenlik için)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Boolean(process.env.SMTP_SECURE), // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Mail Gönderimi
    await transporter.sendMail({
      from: `"Web Sitesi Formu" <${process.env.SMTP_USER}>`, // Gönderen
      to: process.env.MAIL_TO, // Alıcı (Sizin mail adresiniz)
      replyTo: process.env.SMTP_USER, // Yanıtla dendiğinde gidecek adres (opsiyonel)
      subject: `Yeni İletişim Mesajı: ${name}`,
      text: `
        Web sitenizden yeni bir mesaj var:
        
        Ad Soyad: ${name}
        Telefon: ${phone}
        
        Mesaj:
        ${message}
      `,
      html: `
        <h3>Web Sitesinden Yeni Mesaj</h3>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ message: 'Mail başarıyla gönderildi.' });
  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return res.status(500).json({ message: 'Mail gönderilemedi. Lütfen daha sonra tekrar deneyiniz.' });
  }
}
