import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";
import Head from "next/head";
import MouseLight from "@/components/MouseLight";


const inter = Inter({
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: "Mario Di Caprio",
    description: "Fullstack engineer and dual student at Wieland-Werke AG. Specializing in web development. Explore Mario Di Caprio’s portfolio for high-performance web applications and enterprise software solutions.",
    authors: {
        name: "Mario Di Caprio",
        url: "https://mariodicaprio.com/",
    },
    applicationName: "Mario Di Caprio Portfolio",
    keywords: ["Mario Di Caprio", "Software Engineer", "Portfolio"],
    openGraph: {
        type: "website",
        url: "https://mariodicaprio.com/",
        title: "Mario Di Caprio | Dual Student at Wieland-Werke AG",
        description: "Portfolio of Mario Di Caprio, a fullstack engineer and dual student. Building industrial-grade software solutions using state-of-the-art technologies.",
        siteName: "Mario Di Caprio Portfolio",
        images: {
            url: "https://mariodicaprio.com/app/about/profile-pic.png",
        }
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/icon.png" />
            </Head>
            <body className={`${inter.className} antialiased bg-woodsmoke text-white min-h-screen flex flex-col`}>
                <Navbar />
                <main className="grow p-3">
                    {children}
                </main>
                <Footer />
                <MouseLight />
            </body>
        </html>
    );
}
