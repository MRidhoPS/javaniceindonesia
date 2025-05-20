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
            <div className='w-auto h-70 bg-blue-950'>


                


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
