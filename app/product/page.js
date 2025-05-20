'use client'

import Link from "next/link";
import data from "@/app/data/data";
import Image from "next/image";
import { motion } from 'framer-motion';
import { SlideRight, SlideUp } from "@/components/utilities";

export default function ProductPage() {
    return (
        <div>
            {/* Header Section */}
            <div className="relative w-full h-40 lg:h-64 bg-white shadow-lg mt-20 mb-10">
                <Image
                    src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50 z-10" />

                <motion.h1
                    variants={SlideUp(0.4)}
                    viewport={{ amount: 0.5, once: true }}
                    initial='hidden'
                    whileInView='visible'
                    className="absolute inset-x-10 bottom-6 text-4xl font-bold lg:text-7xl lg:inset-x-20 lg:bottom-10 text-white z-20"
                >
                    Services
                </motion.h1>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mb-10 max-w-7xl mx-auto">
                {data.map((item) => (
                    <Link href={`/product/${item.id}`} key={item.id}>
                        <motion.div
                            variants={SlideRight(0.4)}
                            viewport={{ amount: 0.5, once: true }}
                            initial='hidden'
                            whileInView='visible'
                            className="flex items-center gap-4 p-5 bg-gray-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer"
                        >
                            <h1 className="text-lg font-medium">{item.title}</h1>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
