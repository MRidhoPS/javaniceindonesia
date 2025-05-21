'use client'
import data from '@/app/data/data';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlideRight, SlideUp } from '@/components/utilities';
import { useParams } from 'next/navigation';

export default function ServiceDetail() {
    const params = useParams();
    const id = params?.id;

    const service = data.find((item) => item.id === id);

    if (!service) return <div>Service not found</div>;

    return (
        <div className='px-5 min-h-screen'>
            <div className='w-auto h-auto  mt-30 px-5 py-10 space-y-4 shadow-2xl rounded-4xl'>

                <motion.h1
                    variants={SlideRight(0.2)}
                    viewport={{ amount: 0.5, once: true }}
                    initial='hidden'
                    whileInView='visible'
                    className="text-xl md:text-4xl font-bold text-blue-950"
                >
                    {service.title}
                </motion.h1>
                <motion.div
                    variants={SlideUp(0.2)}
                    viewport={{ amount: 0.5, once: true }}
                    initial='hidden'
                    whileInView='visible'
                    className='relative w-auto h-90 bg-white mt-5 shadow-2xl mb-10'
                >

                    <Image src={service.background} width={500} height={300} alt='' className='object-cover w-full h-full filter brightness-65 rounded-2xl'></Image>
                    <h1 className="absolute text-xl md:text-3xl font-medium inset-x-5 bottom-10 text-white">{service.title}</h1>

                </motion.div>

                <motion.p
                    variants={SlideRight(0.3)}
                    viewport={{ amount: 0.5, once: true }}
                    initial='hidden'
                    whileInView='visible'
                    className='text-[14px] md:text-lg lg:text-2xl text-black'
                >
                    {service.description}
                </motion.p>
                <motion.p
                    variants={SlideRight(0.3)}
                    viewport={{ amount: 0.5, once: true }}
                    initial='hidden'
                    whileInView='visible'
                    className='mt-10 text-[18px] md:text-lg lg:text-2xl italic font-bold text-blue-950'
                >
                    {service.bridging}
                </motion.p>

                <motion.p
                    variants={SlideRight(0.3)}
                    viewport={{ amount: 0.5, once: true }}
                    initial='hidden'
                    whileInView='visible'
                    className='text-[14px] md:text-lg lg:text-xl text-black'
                >
                    {service.opportunities}
                </motion.p>

                <div className='space-y-5'>
                    {service.aspek_penting.map((item, index) => (
                        <motion.p
                            variants={SlideRight(0.3)}
                            viewport={{ amount: 0.5, once: true }}
                            initial='hidden'
                            whileInView='visible'
                            className='mt-5 text-black'
                            key={index}
                        >
                            {index + 1} <span className='font-bold text-black'>{item.judul}</span>: {item.isi}
                        </motion.p>
                    ))}
                </div>


                <div className='items-center justify-center flex flex-col mt-10'>
                    <h1 className='text-center font-bold text-blue-950 text-2xl md:text-3xl'>Galery</h1>
                    <div className='mt-3 flex flex-col md:flex-row'>

                        {service.image.map((item, index) => (
                            <div className='my-2 md:mx-3 rounded-2xl' key={index}>
                                <Image src={item} width={300} height={300} alt='' className='rounded-2xl h-50 w-100 object-cover' ></Image>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="flex flex-row justify-between my-10">
                {service.previous_page && !service.next_page && (
                    <Link href={`/product/${service.previous_page}`} className="px-5 py-2 space-y-2 hover:text-blue-700 transition delay-150 duration-300 ease-in-out">
                        <p className='font-semi tracking-wide text-sm text-left text-black'> ⬅️ PREVIOUS</p>
                        <p className=' tracking-wider text-sm md:text-lg text-left text-black'>{service.previous_page.charAt(0).toUpperCase() + service.previous_page.slice(1)}</p>
                    </Link>
                )}

                {service.previous_page && service.next_page && (
                    <>
                        <Link href={`/product/${service.previous_page}`} className="px-5 py-2 space-y-2 hover:text-blue-700 transition delay-150 duration-300 ease-in-out">
                            <p className='font-semi tracking-wide text-sm text-left text-black'> ⬅️ PREVIOUS</p>
                            <p className=' tracking-wider text-sm md:text-lg text-left text-black'>{service.previous_page.charAt(0).toUpperCase() + service.previous_page.slice(1)}</p>
                        </Link>
                        <Link href={`/product/${service.next_page}`} className="px-5 py-2 space-y-2 hover:text-blue-700 transition delay-150 duration-300 ease-in-out">
                            <p className='font-semi tracking-wide text-sm text-right text-black'> NEXT ➡️</p>
                            <p className=' tracking-wider text-sm md:text-lg text-right text-black'>{service.next_page.charAt(0).toUpperCase() + service.next_page.slice(1)}</p>
                        </Link>
                    </>
                )}

                {!service.previous_page && service.next_page && (
                    <Link href={`/product/${service.next_page}`} className="ml-auto px-4 py-2 hover:text-blue-700 transition delay-150 duration-300 ease-in-out">
                        <p className='font-semi tracking-wide text-sm text-right text-black'> NEXT ➡️</p>
                        <p className=' tracking-wider text-sm md:text-lg text-right text-black'>{service.next_page.charAt(0).toUpperCase() + service.next_page.slice(1)}</p>
                    </Link>
                )}
            </div>

        </div >
    );
}
