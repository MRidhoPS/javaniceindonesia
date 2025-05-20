'use client'

import { SlideLeft, SlideRight, SlideUp } from '@/components/utilities';
import { motion } from 'framer-motion';


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
                        className="text-balance text-xl text-justify mt-3 ">
                        Sebagai Badan Usaha Swasta yang telah mendapat kepercayaan dari berbagai pihak dalam menangani pekerjaan baik skala kecil maupun besar, kami PT. JAVANICE INDONESIA PERKASA. selalu ingin berpartisipasi secara aktif dalam memberikan sumbangan pembangunan pada bangsa dan negara tercinta ini.Dengan didukung oleh pengalaman dan pengetahuan yang dimiliki serta menjunjung tinggi niat yang luhur untuk pengabdian kepada bangsa dan negara maka kami siap menyambut anda untuk bergabung bersama kami dan memberikan Pelayanan terbaik.
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
                        className="text-balance text-xl text-justify mt-3 ">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.
                    </motion.p>
                </div>
                <div className="items-center justify-center flex flex-col space-y-3 my-20">

                    <motion.h1
                        variants={SlideUp(0.4)}

                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.5, once: true }}
                        className="text-center text-5xl font-bold mb-10 lg:text-7xl text-blue-950">
                        VISI
                    </motion.h1>

                    
                    <div className="flex flex-col lg:flex lg:flex-row gap-6">
                        <motion.div
                            variants={SlideRight(0.4)}

                            initial='hidden'
                            whileInView='visible'
                            className='bg-white shadow-2xl w-auto h-auto rounded-3xl p-10 justify-center flex flex-col mx-5 gap-4'
                        >
                            <h1 className="text-6xl ">Title</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
                        </motion.div>
                        <motion.div
                            variants={SlideRight(0.4)}

                            initial='hidden'
                            whileInView='visible'
                            className='bg-white shadow-2xl w-auto h-auto rounded-3xl p-10 justify-center flex flex-col mx-5 gap-4'
                        >
                            <h1 className="text-6xl ">Title</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
                        </motion.div>
                        <motion.div
                            variants={SlideRight(0.4)}

                            initial='hidden'
                            whileInView='visible'
                            className='bg-white shadow-2xl w-auto h-auto rounded-3xl p-10 justify-center flex flex-col mx-5 gap-4'
                        >
                            <h1 className="text-6xl ">Title</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
