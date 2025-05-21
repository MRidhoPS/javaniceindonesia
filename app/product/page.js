// 'use client'

// import Link from "next/link";
// import data from "@/app/data/data";
// import Image from "next/image";
// import { motion } from 'framer-motion';
// import { SlideRight, SlideUp } from "@/components/utilities";

// export default function ProductPage() {
//     return (
//         <div>
//             {/* Header Section */}
//             <div className="relative w-full h-40 lg:h-64 bg-white shadow-lg mt-20 mb-10">
//                 <Image
//                     src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                     alt=""
//                     width={1920}
//                     height={1080}
//                     className="w-full h-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-black/50 z-10" />

//                 <motion.h1
//                     variants={SlideUp(0.4)}
//                     viewport={{ amount: 0.5, once: true }}
//                     initial='hidden'
//                     whileInView='visible'
//                     className="absolute inset-x-10 bottom-6 text-4xl font-bold lg:text-7xl lg:inset-x-20 lg:bottom-10 text-white z-20"
//                 >
//                     Services
//                 </motion.h1>
//             </div>

//             {/* Service Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-10 max-w-7xl mx-auto">
//                 {data.map((item) => (
//                     <Link href={`/product/${item.id}`} key={item.id}>
//                         <motion.div
//                             variants={SlideRight(0.4)}
//                             viewport={{ amount: 0.5, once: true }}
//                             initial="hidden"
//                             whileInView="visible"
//                             className="flex items-center gap-4 p-5 bg-gray-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer group"
//                         >
//                             <h1 className="text-lg font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px] transition-all duration-300 ease-in-out 
//                             group-hover:whitespace-normal group-hover:overflow-visible group-hover:text-clip">
//                                 {item.title}
//                             </h1>
//                         </motion.div>
//                     </Link>

//                 ))}
//             </div>
//         </div>
//     );
// }


'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import data from "@/app/data/data";
import { SlideRight, SlideUp } from "@/components/utilities";
import { ArrowRight } from "lucide-react";

export default function ProductPage() {
    return (
        <div>
            {/* Header Section */}
            <div className="relative w-full h-40 lg:h-64 bg-white shadow-lg mt-20 mb-10 rounded-b-4xl">
            <Image
                                src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                                width={1920}
                                height={1080}
                                className="w-full h-full object-cover rounded-b-4xl"
                            />

                            <div className="absolute inset-0 bg-black/50 z-10 rounded-b-4xl" />

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

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mb-16 max-w-7xl mx-auto">
                {data.map((item) => (
                    <Link href={`/product/${item.id}`} key={item.id}>
                        <motion.div
                            variants={SlideRight(0.4)}
                            viewport={{ amount: 0.5, once: true }}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.02 }}
                            className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200
                                       hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            <div className="flex flex-col flex-1 overflow-hidden">
                                <h1
                                    className="text-lg font-semibold text-gray-800 max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap
                                               transition-all duration-300 ease-in-out
                                               group-hover:whitespace-normal group-hover:overflow-visible group-hover:text-clip"
                                >
                                    {item.title}
                                </h1>
                                <p
                                    className="text-sm text-gray-500 mt-1 max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap
             transition-all duration-700 ease-in-out
             group-hover:whitespace-normal group-hover:overflow-visible group-hover:text-clip group-hover:translate-y-0 group-hover:opacity-100
             transform translate-y-1 opacity-90"
                                >
                                    {item.description || "Lihat selengkapnya..."}
                                </p>
                            </div>
                            <ArrowRight className="text-gray-400 group-hover:text-gray-800 transition-colors" size={20} />
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

