'use client'

import { SlideLeft, SlideRight, SlideUp } from '@/components/utilities';
import { motion } from 'framer-motion';
import Image from 'next/image';
import misi from '../data/misi';


export default function AboutPage() {
    return (
        <section id="about" className="min-h-screen">
            <div className="w-auto h-auto rounded-bl-4xl rounded-br-4xl gap-2">

                <div className='py-40 px-5 gap-2 flex space-y-1.5 flex-col items-center text-center lg:flex lg:flex-row lg:space-x-6 lg:text-left shadow-2xl rounded-b-4xl'>
                    <motion.h1
                        variants={SlideUp(0.2)}
                        viewport={{ amount: 0.5, once: true }}

                        initial='hidden'
                        whileInView='visible'
                        className="text-5xl font-bold md:text-7xl lg:text-9xl text-blue-950">
                        Tentang Kami
                    </motion.h1>
                    <motion.p
                        variants={SlideRight(0.2)}
                        viewport={{ once: true }}
                        initial='hidden'
                        whileInView='visible'
                        className="text-balance text-xl text-justify mt-3 text-black">
                        Kami merupakan perusahaan swasta yang berpengalaman menangani proyek skala kecil hingga besar di bidang Electric, Mechanical, dan General Supplier, didukung Peralatan yang canggih, Tenaga ahli profesional, dan Tim Engineering berorientasi pelanggan. Kami berkomitmen pada kemampuan, anggaran, jadwal dan pelayanan untuk pengembangan berkelanjutan dan berkomitmen untuk memberikan solusi terbaik dalam Pemeliharaan Transformator, Pemeliharaan dan Pemasangan Panel listrik, dan Pemeliharaan Genset.
                        Dengan slogan “Trust and Solution is Our Services,” kami menjunjung kepercayaan konsumen, menyediakan layanan 24 jam, dan siap menjadi mitra utama di bidang Electrical, Mechanical, dan General Supplier.
                    </motion.p>
                </div>
                <div className='py-40 px-10 gap-2 flex space-y-1.5 flex-col  items-center text-center lg:flex lg:flex-row-reverse lg:space-x-6 lg:text-left shadow-2xl rounded-b-4xl text-balance'>
                    <motion.h1
                        variants={SlideUp(0.2)}
                        viewport={{ amount: 0.5, once: true }}

                        initial='hidden'
                        whileInView='visible'
                        className="text-5xl font-bold md:text-7xl lg:text-9xl text-blue-950">
                        Our Story
                    </motion.h1>
                    <motion.p
                        variants={SlideRight(0.2)}
                        viewport={{ once: true }}
                        initial='hidden'
                        whileInView='visible'
                        className="text-balance text-xl text-justify mt-3 text-black">
                        Didirikan pada 2009, PT. Javanice Indonesia Perkasa adalah Perusahaan Swasta Nasional yang bergerak di bidang jasa kontraktor umum dan pemasok peralatan Electrical dan Mekanikal. Dengan pengalaman bertahun-tahun, kami telah dipercaya untuk menangani berbagai proyek skala kecil hingga besar, baik di sektor swasta maupun pemerintahan.
                    </motion.p>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Image Section */}
                    <div className="relative w-full h-full">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Gunbuster Nickel Industry"
                                width={500}
                                height={500}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-35 left-10 w-4/5 rounded-xl overflow-hidden shadow-lg hidden lg:block">
                            <Image
                                src="https://images.pexels.com/photos/6307071/pexels-photo-6307071.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Nickel Production"
                                className="w-full object-cover"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="space-y-10">
                        <div>
                            <p className="text-green-600 font-semibold uppercase tracking-wide mb-2">Visi Misi Kami</p>
                            <h2 className="text-4xl font-bold text-gray-800">Javanice Indonesia Perkasa</h2>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Visi Kami</h3>
                            <p className="text-gray-500">
                                Menjadi perusahaan terpercaya dan unggul di bidang elektrikal dan mekanikal di Indonesia, dengan komitmen terhadap kualitas, keselamatan, dan inovasi teknologi.
                            </p>
                        </div>

                        {/* <div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Misi Kami</h3>
                            {misi.map((item, index) => (
                                <p className="text-gray-500" key={index}>
                                    {index + 1} {item.title} {item.description}
                                </p>
                            ))}

                        </div> */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Misi Kami</h3>
                            <ol className="list-decimal list-inside space-y-4 text-gray-500 leading-relaxed text-base">
                                {misi.map((item, index) => (
                                    <li key={index}>
                                        <span className="font-medium">{item.title}</span>{' '}
                                        {item.description}
                                    </li>
                                ))}
                            </ol>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
