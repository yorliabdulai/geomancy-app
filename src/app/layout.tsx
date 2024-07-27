import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "../components/navigation";
import "./globals.css";
import "../styles/globals.scss";
import Footer from "@/components/Footer";
//import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation/>
        {children}
      <Footer />
      </body>
    </html>
  );
}
