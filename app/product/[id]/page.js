import data from '@/app/data/data';
import Link from 'next/link';

export default function ServiceDetail({ params }) {
    const { id } = params;
    const service = data.find((item) => item.id === id);

    if (!service) {
        return <div>Service not found.</div>;
    }

    return (
        <div className='px-5'>
            <div className='w-auto h-auto  mt-30 px-5 py-10 space-y-4 shadow-2xl rounded-4xl'>
                <h1 className="text-4xl font-bold">{service.title}</h1>
                <div className='relative w-auto h-90 bg-white mt-5 shadow-2xl mb-10'>
                    <h1 className="absolute text-3xl font-medium inset-x-5 bottom-10">{service.title}</h1>
                </div>
                <p>{service.details}</p>
                <p className='mt-10'>Beberapa aspek penting dari layanan transportasi masyarakat meliputi:</p>
                <div className='space-y-5'>{service.aspek_penting.map((item, index) => (
                    <p key={index} >{index + 1} <span className='font-bold'>{item.judul}</span>: {item.isi}</p>
                ))}</div>
                


            </div>
            <div className="flex flex-row justify-between my-10">
                {service.previous_page && !service.next_page && (
                    <Link href={`/product/${service.previous_page}`} className="px-5 py-2 space-y-2 hover:text-blue-700 transition delay-150 duration-300 ease-in-out">
                        <p className='font-semi tracking-wide text-sm'> ⬅️PREVIOUS</p>
                        <p className=' tracking-wider text-sm md:text-lg'>{service.previous_page.charAt(0).toUpperCase() + service.previous_page.slice(1)}</p>
                    </Link>
                )}

                {service.previous_page && service.next_page && (
                    <>
                        <Link href={`/product/${service.previous_page}`} className="px-5 py-2 space-y-2 hover:text-blue-700 transition delay-150 duration-300 ease-in-out">
                            <p className='font-semi tracking-wide text-sm'> ⬅️PREVIOUS</p>
                            <p className=' tracking-wider text-sm md:text-lg'>{service.previous_page.charAt(0).toUpperCase() + service.previous_page.slice(1)}</p>
                        </Link>
                        <Link href={`/product/${service.next_page}`} className="px-5 py-2 space-y-2 hover:text-blue-700 transition delay-150 duration-300 ease-in-out">
                            <p className='font-semi tracking-wide text-sm'> NEXT➡️</p>
                            <p className=' tracking-wider text-sm md:text-lg'>{service.next_page.charAt(0).toUpperCase() + service.next_page.slice(1)}</p>
                        </Link>
                    </>
                )}

                {!service.previous_page && service.next_page && (
                    <Link href={`/product/${service.next_page}`} className="ml-auto px-4 py-2 hover:text-blue-700 transition delay-150 duration-300 ease-in-out">
                        <p className='font-semi tracking-wide text-sm'> NEXT➡️</p>
                        <p className=' tracking-wider text-sm md:text-lg'>{service.next_page.charAt(0).toUpperCase() + service.next_page.slice(1)}</p>
                    </Link>
                )}
            </div>

        </div >
    );
}
