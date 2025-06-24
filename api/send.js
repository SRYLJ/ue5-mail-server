const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    secure: true,
    auth: {
      user: 'q318597050@163.com',
      pass: 'TWqvU6iqjwNDUGYR'
    }
  });

  try {
    await transporter.sendMail({
      from: '"SRY游戏作者" <q318597050@163.com>',
      to,
      subject,
      text
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
