import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { nama, email, pesan } = await request.json();

        if (!nama || !email || !pesan) {
            return new Response(
                JSON.stringify({ message: "Semua field wajib diisi." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `${email}`,
            to: process.env.EMAIL_USER,
            subject: "Consultation Request - Product or Service Inquiry",
            replyTo: email,
            text: pesan,
            html: `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong><br>${pesan}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ message: "Email berhasil dikirim." }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Email error:", error);
        return new Response(
            JSON.stringify({ message: "Gagal mengirim email.", error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
