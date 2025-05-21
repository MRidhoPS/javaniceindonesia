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
import { SlideRight } from '@/components/utilities';

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
            <div className="bg-white w-full overflow-hidden">
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

                {/* Product Services Section */}
                <section id="product-services" className="bg-white overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-5 pb-10 items-center justify-center lg:px-10">
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
            </div>
        </section>
    );
}
