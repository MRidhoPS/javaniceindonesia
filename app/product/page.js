import Link from "next/link";
import data from "@/app/data/data";

export default function ProductPage() {
    return (
        <div>
            {/* Header Section */}
            <div className="relative w-full h-40 lg:h-64 bg-white shadow-lg mt-20 mb-10">
                <h1 className="absolute inset-x-10 bottom-6 text-4xl font-bold lg:text-7xl lg:inset-x-20 lg:bottom-10">
                    Services
                </h1>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mb-10 max-w-7xl mx-auto">
                {data.map((item) => (
                    <Link href={`/product/${item.id}`} key={item.id}>
                        <div className="flex items-center gap-4 p-5 bg-gray-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
                            {/* Optional: Tambahkan ikon di sini */}
                            {/* <div className="text-2xl">🚍</div> */}
                            <h1 className="text-lg font-medium">{item.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
