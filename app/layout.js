import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import BottomInfo from "@/components/bottom_info";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PT. JAVANICE INDONESIA PERKASA | Official Website 2025",
  description:
    "treatment oil trafo,PT.JAVANICE INDONESIA PERKASA,javanice, perkasa, java nice,javaniceindonesia,java nice indonesia,Purifikasi oli trafo,mechanical contractor,supplier listrik,investigasi infrared,service generator,service panel listrik,generator service,perbaikan generator,maintenance generator, oli trafo,perawatan cubicle.",
  keywords:
    "PT.JAVANICEINDONESIAPERKASA, java nice, Jasa Treatment, Purifikasi Oli Trafo, javanice indonesia,mechanical contractor,supplier listrik,investigasi infrared,service generator,service panel listrik,generator service,perbaikan generator,maintenance generator, oli trafo,perawatan cubicle.,Treatment, Oli, Trafo, Treatment, Oli, Trafo, Penjual, Exportir, Internasional, exportir, penjual",
  authors: [{ name: "PT. Javanice Indonesia Perkasa" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "PT. JAVANICE INDONESIA PERKASA | Official Website",
    description:
      "Spesialis dalam treatment oil trafo, jasa listrik, dan mechanical contractor di Indonesia.",
    url: "https://javaniceindonesia.com", // Ganti dengan domain aslimu
    siteName: "Javanice Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <BottomInfo />
      </body>
    </html>
  );
}
