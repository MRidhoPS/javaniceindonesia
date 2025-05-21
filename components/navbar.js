'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PRODUCT', href: '/product' },
    { name: 'CONTACT', href: '/contact' },
]



export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname();

    const isHome = pathname === '/';

    const [highlightProduct, setHighlightProduct] = useState(false);

    useEffect(() => {
        if (!isHome) return;

        const section = document.getElementById('product-services');
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setHighlightProduct(entry.isIntersecting);
            },
            {
                threshold: 0.4, // Trigger ketika 40% terlihat
            }
        );

        observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, [isHome]);

    return (

        <header className={`inset-x-0 top-0 z-50 fixed shadow transition-colors duration-300 ${isHome
                ? highlightProduct
                ? 'opacity-0 pointer-events-none transition-opacity delay-100 ease-out' // Saat berada di section #product-services
                    : 'border-b border-white/50'
                : 'bg-white'
        }`}>
            <nav aria-label="Global" className="flex items-center justify-between p-6">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">JavaNiceIndonesia</span>
                        <Image
                            width={500}
                            height={500}
                            alt=""
                            // src="/icon.png"
                            src={`${isHome ? '/logo_white.png' : '/logo_black.png'}`}
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`md:text-lg font-medium hover:text-blue-600 hover:scale-110 hover:-translate-z-2 transition delay-150 duration-300 ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none ${pathname === item.href ? 'text-blue-600 font-bold' : 'text-gray-400'
                                } ${isHome ? ' text-white hover:text-white' : 'text-black'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div> */}
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                width={500}
                                height={500}
                                alt=""
                                src="/icon.png"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
