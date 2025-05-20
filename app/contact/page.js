import { Label } from "@headlessui/react"

var data = [
  {
    'title': 'Alamat',
    'description': 'Jl. H. Risan No.06 Rt. 02/Rw. 07 Duren Jaya Bekasi Timur Bekasi 17111',
    'icon': '📍'
  },
  {
    'title': 'No. Alamat',
    'description': '+62 8128 008 0275',
    'icon': '📱'
  },
  {
    'title': 'Email',
    'description': 'javaniceindonesia@gmail.com',
    'icon': '📧'
  },
]
export default function ContactPage() {
  return (
    <div>

      


      <div className="bg-white w-full mt-30 flex flex-col md:flex-row my-40">

        {/* Contact Info Section */}
        <div className="py-10 px-6 md:px-10 lg:px-20 basis-1/2 ">
          <h1 className="mb-6 text-3xl md:text-4xl font-bold text-blue-900">Hubungi Kami</h1>
          {data.map((item, index) => (
            <div className="mb-2 flex flex-row items-center gap-3" key={index}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-blue-900 shrink-0">
                <p className="text-lg text-blue-900">{item.icon}</p>
              </div>

              <div>
                <h1 className="text-2xl font-bold text-blue-900 mb-1 ">{item.title}</h1>
                <p className="font-extralight text-pretty text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="mx-4 py-10 px-6 md:px-10 lg:px-20 basis-1/2 bg-gray-100 rounded-4xl">
          <h1 className="mb-6 text-3xl md:text-4xl font-bold text-blue-900">Kirim Pesan</h1>

          <form className="space-y-5">
            <div className="flex flex-col">
              <label className="mb-1 text-sm  text-blue-900 font-semibold">Nama</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline font-semibold"
                placeholder="Nama lengkap"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm  text-blue-900 font-semibold">Email</label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Alamat email"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm  text-blue-900 font-semibold">Pesan</label>
              <textarea
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Tulis pesan Anda..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-fit px-5 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>

      <div className="w-full h-80">
        <iframe
          title="maps"
          className="w-full h-full"
          src="https://maps.google.com/maps?q=Jakarta&z=13&output=embed"
        ></iframe>
      </div>
    </div>
  );
}