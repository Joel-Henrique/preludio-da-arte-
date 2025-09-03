import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Preludio da Arte",
  description: "Aplicação usando Next.js",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
    <body className="flex flex-col min-h-screen font-sans">
    <Header />
    <main className="flex-1 container mx-auto p-4">{children}</main>
    <Footer />
    </body>
    </html>
  );
}
