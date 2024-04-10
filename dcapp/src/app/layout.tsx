import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prospekt - Transformando espacios en proyectos de vida",
  description: "Damos vida a tus proyectos con pasión y experiencia. Especialistas en convertir terrenos vacíos en proyectos que inspiran y transforman comunidades.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
