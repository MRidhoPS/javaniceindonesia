// 'use client';

// import React from 'react'
// import { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import data from '../data/data';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { SlideRight } from '@/components/utilities';

// export default function HomePage() {
//     const [downloadStatus, setDownloadStatus] = useState('');

//     const downloadPdf = async () => {
//         try {
//             const response = await axios.get('/api/download', {
//                 responseType: 'blob',
//             });

//             const contentDisposition = response.headers['content-disposition'];
//             const fileNameMatch = contentDisposition?.match(/filename="(.+)"/);
//             const fileName = fileNameMatch ? fileNameMatch[1] : 'company-profile.pdf';

//             const blob = new Blob([response.data], { type: response.headers['content-type'] });
//             const url = window.URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', fileName);
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             window.URL.revokeObjectURL(url);

//             setDownloadStatus('Downloaded successfully');
//         } catch (error) {
//             console.error('Error downloading file:', error);
//             setDownloadStatus('Error downloading file');
//         }
//     };
//     return (
//         <section id='home'>
//             <div className='bg-white'>
//                 <div className="w-auto h-[600px] bg-blue-200 relative overflow-hidden mb-10">
//                     {/* Background image */}
//                     <Image
//                         src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                         alt=""
//                         width={1920}
//                         height={1080}
//                         className="w-full h-full object-cover"
//                     />

//                     <div className="absolute inset-0 bg-black/50 z-10" />

//                     <motion.div
//                         variants={SlideRight(0.2)}
//                         viewport={{ amount: 0.3, once: true }}
//                         initial='hidden'
//                         whileInView='visible'
//                         className="absolute inset-0 flex items-center justify-center z-20">
//                         <div className="mx-auto max-w-3xl text-center px-4">
//                             <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
//                                 PT. JAVANICE INDONESIA PERKASA
//                             </h1>
//                             <p className="mt-8 text-sm font-light text-gray-50 sm:text-xl">
//                                 Diakui sebagai perusahaan yang unggul dalam Pelayanan, Kualitas, Dipercaya, dan Profesional.
//                             </p>
//                             <div className="mt-10 flex justify-center">
//                                 <button
//                                     type="button"
//                                     onClick={downloadPdf}
//                                     className="rounded-md px-4 py-2.5 text-sm font-semibold border-2 border-white text-white shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-black transition delay-100 ease-in-out bg-transparent"
//                                 >
//                                     Download Company Profile
//                                 </button>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//                 <section id='product-services' className='bg-white overflow-hidden'>
//                     <div className='flex flex-col gap-3 md:gap-1 md:grid md:grid-cols-4 px-5 pb-10 items-center justify-center lg:px-10 bg-white'>
//                         {data.map((item, index) => (
//                             <Link href={`/product/${item.id}`} key={item.id}>
//                                 <motion.div
//                                     variants={SlideRight(0.2)}
//                                     viewport={{ once: true }}
//                                     initial="hidden"
//                                     whileInView="visible"
//                                     className="relative my-1 mx-1 bg-transparent overflow-hidden group"
//                                 >
//                                     <Image
//                                         src={item.background}
//                                         width={500}
//                                         height={500}
//                                         alt=""
//                                         className="object-cover w-100 h-40 rounded-xl max-w-full"
//                                     />

//                                     <div className="absolute inset-0 bg-black/40 rounded-2xl group-hover:bg-black/10 transition duration-300 ease-in-out z-10" />

//                                     <h1 className="absolute bottom-4 left-6 right-4 text-white z-20 text-[12px] overflow-hidden text-ellipsis whitespace-nowrap">
//                                         {item.title}
//                                     </h1>
//                                 </motion.div>
//                             </Link>


//                         ))}
//                     </div>
//                 </section>


//             </div>
//         </section>

       
//     )
// }

'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../data/data';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlideRight, SlideUp } from '@/components/utilities';

export default function HomePage() {
    const [downloadStatus, setDownloadStatus] = useState('');

    const downloadPdf = async () => {
        try {
            const response = await axios.get('/api/download', {
                responseType: 'blob',
            });

            const contentDisposition = response.headers['content-disposition'];
            const fileNameMatch = contentDisposition?.match(/filename="(.+)"/);
            const fileName = fileNameMatch ? fileNameMatch[1] : 'company-profile.pdf';

            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

            setDownloadStatus('Downloaded successfully');
        } catch (error) {
            console.error('Error downloading file:', error);
            setDownloadStatus('Error downloading file');
        }
    };

    // Optional: Debug overflow
    useEffect(() => {
        const elements = [...document.body.querySelectorAll("*")];
        for (const el of elements) {
            if (el.scrollWidth > document.documentElement.clientWidth) {
                console.warn('Overflow:', el);
                el.style.border = '2px solid red';
            }
        }
    }, []);

    return (
        <section id="home" className="overflow-x-hidden">
            <div className="bg-transparent w-full overflow-hidden">
                {/* Hero Section */}
                <div className="w-full h-[600px] bg-blue-200 relative overflow-hidden mb-10 max-w-screen">
                    <Image
                        src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Hero Image"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <motion.div
                        variants={SlideRight(0.2)}
                        viewport={{ amount: 0.3, once: true }}
                        initial="hidden"
                        whileInView="visible"
                        className="absolute inset-0 flex items-center justify-center z-20 px-4"
                    >
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                PT. JAVANICE INDONESIA PERKASA
                            </h1>
                            <p className="mt-8 text-sm font-light text-gray-50 sm:text-xl">
                                Diakui sebagai perusahaan yang unggul dalam Pelayanan, Kualitas, Dipercaya, dan Profesional.
                            </p>
                            <div className="mt-10 flex justify-center">
                                <button
                                    type="button"
                                    onClick={downloadPdf}
                                    className="rounded-md px-4 py-2.5 text-sm font-semibold border-2 border-white text-white shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-black transition delay-100 ease-in-out bg-transparent"
                                >
                                    Download Company Profile
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className='mb-10 py-40 px-5 gap-2 flex space-y-1.5 flex-col items-center text-center lg:flex lg:flex-row lg:space-x-6 lg:text-left shadow-2xl 
                bg-white rounded-b-4xl'>
                                    <motion.h1
                                        variants={SlideUp(0.2)}
                                        viewport={{ amount: 0.5, once: true }}
                
                                        initial='hidden'
                                        whileInView='visible'
                                        className="text-2xl font-bold md:text-7xl lg:text-9xl text-blue-950">
                                        Tentang Kami
                                    </motion.h1>
                                    <motion.p
                                        variants={SlideRight(0.2)}
                                        viewport={{ once: true }}
                                        initial='hidden'
                                        whileInView='visible'
                                        className="text-balance text-[14px] md:text-[16px] lg:text-[20px] text-justify mt-3 text-black">
                                        Kami merupakan perusahaan swasta yang berpengalaman menangani proyek skala kecil hingga besar di bidang Electric, Mechanical, dan General Supplier, didukung Peralatan yang canggih, Tenaga ahli profesional, dan Tim Engineering berorientasi pelanggan. Kami berkomitmen pada kemampuan, anggaran, jadwal dan pelayanan untuk pengembangan berkelanjutan dan berkomitmen untuk memberikan solusi terbaik dalam Pemeliharaan Transformator, Pemeliharaan dan Pemasangan Panel listrik, dan Pemeliharaan Genset.
                                        Dengan slogan “Trust and Solution is Our Services,” kami menjunjung kepercayaan konsumen, menyediakan layanan 24 jam, dan siap menjadi mitra utama di bidang Electrical, Mechanical, dan General Supplier.
                                    </motion.p>
                                </div>

                {/* Product Services Section */}
                <section id="product-services" className="bg-white overflow-hidden">
                    <h1 className='text-blue-950 font-bold text-center mt-10 text-[26px] md:text-3xl lg:text-6xl'>Product & Services</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2  mt-10 md:grid-cols-4 gap-4 px-5 pb-10 items-center justify-center lg:px-10">
                        {data.map((item) => (
                            <Link href={`/product/${item.id}`} key={item.id}>
                                <motion.div
                                    variants={SlideRight(0.2)}
                                    viewport={{ once: true }}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="relative bg-transparent overflow-hidden group rounded-xl"
                                >
                                    <Image
                                        src={item.background}
                                        width={500}
                                        height={500}
                                        alt={item.title}
                                        className="object-cover w-full h-40 rounded-xl max-w-full"
                                    />
                                    <div className="absolute inset-0 bg-black/40 rounded-xl group-hover:bg-black/10 transition duration-300 ease-in-out z-10" />
                                    <h1 className="absolute bottom-4 left-6 right-4 text-white z-20 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                                        {item.title}
                                    </h1>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>

                <div className="w-full h-80">
                    <iframe
                        title="maps"
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.851057043237!2d107.02035102929717!3d-6.235661677583245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698fdb842b938f%3A0xf37617d8d2f6ea6f!2sPT.+JAVANICE+INDONESIA+PERKASA!5e0!3m2!1sid!2sid!4v1536595582593"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
