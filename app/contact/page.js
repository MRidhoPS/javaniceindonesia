"use client"
import { useState } from "react";

const contactInfo = [
  {
    title: 'Alamat',
    description: 'Jl. H. Risan No.06 Rt. 02/Rw. 07 Duren Jaya Bekasi Timur 17111',
    icon: '📍'
  },
  {
    title: 'No. Telephone',
    description: '(021) - 8813458',
    icon: '📞'
  },
  {
    title: 'WhatsApp',
    description: '+6285353226321',
    icon: '📱'
  },
  {
    title: 'Email',
    description: 'marketing@javanice-electric.com',
    icon: '📧'
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ nama: "", email: "", pesan: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div>
      <div className="bg-white w-full mt-30 flex flex-col md:flex-row my-40">
        {/* Contact Info Section */}
        <div className="py-10 px-6 md:px-10 lg:px-20 basis-1/2">
          <h1 className="mb-6 text-3xl md:text-4xl font-bold text-blue-900">Hubungi Kami</h1>
          {contactInfo.map((item, index) => (
            <div className="mb-2 flex flex-row items-center gap-3" key={index}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-blue-900 shrink-0">
                <p className="text-lg text-blue-900">{item.icon}</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900 mb-1">{item.title}</h1>
                <p className="font-extralight text-pretty text-sm text-black">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="mx-4 py-10 px-6 md:px-10 lg:px-20 basis-1/2 bg-gray-100 rounded-4xl">
          <h1 className="mb-6 text-3xl md:text-4xl font-bold text-blue-900">Kirim Pesan</h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-blue-900 font-semibold">Nama</label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline font-semibold"
                placeholder="Nama lengkap"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm text-blue-900 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Alamat email penerima"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm text-blue-900 font-semibold">Pesan</label>
              <textarea
                name="pesan"
                value={form.pesan}
                onChange={handleChange}
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Tulis pesan Anda..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-fit px-5 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition"
            >
              Kirim
            </button>

            {status === "loading" && <p className="text-sm mt-2 text-blue-600">Mengirim...</p>}
            {status === "success" && <p className="text-sm mt-2 text-green-600">Pesan berhasil dikirim!</p>}
            {status === "error" && <p className="text-sm mt-2 text-red-600">Gagal mengirim pesan. Coba lagi.</p>}
          </form>
        </div>
      </div>

      <div className="w-full h-80">
        <iframe
          title="maps"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.851057043237!2d107.02035102929717!3d-6.235661677583245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698fdb842b938f%3A0xf37617d8d2f6ea6f!2sPT.+JAVANICE+INDONESIA+PERKASA!5e0!3m2!1sid!2sid!4v1536595582593"
        ></iframe>
      </div>
    </div>
  );
}
