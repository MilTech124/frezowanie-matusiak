import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Frezowanie Podłóg pod Ogrzewanie Podłogowe | Małopolska",
  description: "Profesjonalne, bezpyłowe frezowanie podłóg pod ogrzewanie podłogowe. Szybka realizacja w Nowym Sączu, Limanowej i całej Małopolsce. Sprawdź cennik i realizacje.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#3D3E40] text-white`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
