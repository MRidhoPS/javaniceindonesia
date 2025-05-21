import Link from 'next/link'
import React from 'react'

const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PRODUCT', href: '/product' },
    { name: 'CONTACT', href: '/contact' },
]

export default function BottomInfo() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center items-center text-center py-30 px-7 md:px-40 gap-12 bg-blue-950">
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Lokasi</h2>
                    <p className="text-gray-300">
                        Jl. H. Risan No.06 Rt. 02/Rw. 07 Duren Jaya Bekasi Timur Bekasi 17111
                    </p>
                </div>

                <div className="hidden md:block w-px bg-gray-300 h-24" />

                <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Jam Operasional</h2>
                    <p className="text-gray-300">10.00 – 22.00</p>
                    <p className="text-gray-300">Senin – Minggu</p>
                </div>

                <div className="hidden md:block w-px bg-gray-300 h-24" />

                <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Kontak Kami</h2>
                    <p className="text-gray-300">Phone : +021 - 8810373, <br/> 021 - 8813458</p>
                    <p className="text-gray-300">Email : contact@gunbuster.co.id</p>
                </div>
            </div>

            <div className="w-full bg-gray-100 px-4 py-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">

                    {/* Navigasi kiri */}
                    <div className="hidden md:flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-800 hover:text-blue-600 transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Copyright kanan */}
                    <div className="text-sm font-medium text-gray-700 text-center md:text-right">
                        © javaniceindonesia. All rights reserved.
                    </div>
                </div>
            </div>





        </div>
    )
}
