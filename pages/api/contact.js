export default function handler(req, res) {
  if (req.method === "POST") {
    const PASS = process.env.PASS;
    const USER = process.env.USER;

    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: USER,
        pass: PASS,
      },
    });
    const { name = "", email = "", subject = "", query = "" } = req?.body?.data;

    const mailData = {
      from: USER,
      to: "Enquires@communitythaf.com",
      subject,
      text: query,
      html: `<div>
          <h1>Enquiry from ${name}</h1>
          <h2>Subject: ${subject}</h2>
          <p>email: ${email}</p>
          <h4>query</h4>
          <p>${query}</p>
        </div>`,
    };

    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(`Failure: ${err}`);
        res.status(500).json({ message: "failure" });
      } else {
        console.log(`success: ${JSON.stringify(info, null, 2)}`);
        res.status(200).json({ message: "Success" });
      }
    });
  }
}
