import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBtn from "@/components/ChatBtn";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppin",
  weight: ["300","400", "500", "600","700","800"],
});



const baseUrl =
process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: {
    default: "Premium Furniture & Luxury Interior Design Lahore | Beyond Interior",
    template: "%s | Beyond Interior" 
  },
  description: "Transform your space with Lahore's leading furniture and interior design experts. Specializing in modern, bespoke furniture for homes in DHA, Gulberg, and across Pakistan. Visit our showroom today.",
       icons: {
    icon: "/favicon-bg.png"
  },
  keywords: [
    "Furniture stores in Lahore",
    "Best interior designers in Lahore",
    "Luxury furniture Pakistan",
    "Modern home decor Lahore",
    "Custom made furniture DHA Lahore",
    "Office furniture Lahore",
    "Home renovation services Pakistan"
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Premium Furniture & Luxury Interior Design Lahore",
    description: "Discover handcrafted furniture and turnkey interior solutions in Lahore. Elevate your living with our bespoke collections.",
    url: baseUrl,
    siteName: "Beyond Interior",
    images: [
      {
        url: "/living.jpg", 
        width: 1200,
        height: 630,
        alt: "Luxury Interior Showroom in Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Furniture & Interiors | Lahore",
    description: "Modern designs and bespoke craftsmanship in the heart of Lahore.",
    images: ["/sofa.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
<Header />

<ChatBtn />
        
        {children}
<Footer />
        </main>
        <Toaster />

        </body>
    </html>
  );
}
