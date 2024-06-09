import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Top from "./layout/Top";
import Footer from "./layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Anime",
  description: "My Anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Top />
        {children}
        <Footer />
      </body>
    </html>
  );
}
