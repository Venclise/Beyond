
import ProductsGrid from '@/components/ui/products/ProductsGrid'
import React from 'react'

import { Metadata } from "next";


const baseUrl =
process.env.NEXT_PUBLIC_SITE_URL 

export const metadata: Metadata = {

  title: "Designer Furniture Collection | Modern Home Decor Lahore",
  
 
  description: "Browse our complete collection of luxury furniture and interior accessories in Lahore. From elegant sofa sets to modern dining tables, find premium designs for your home in DHA, Gulberg, and Johar Town.",
  
  alternates: {
    canonical: `${baseUrl}/products`,
  },
  
  openGraph: {
    title: "Luxury Furniture & Home Decor Collection in Lahore",
    description: "Explore the latest trends in interior design. Premium quality, bespoke furniture delivered across Lahore and Pakistan.",
    url: `${baseUrl}/products`,
    siteName: "Beyond Interior",
    images: [
      {
        url: "/living.jpg", 
        width: 1200,
        height: 630,
        alt: "Modern furniture collection in our Lahore showroom",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shop Modern Furniture | Lahore's Best Interior Store",
    description: "Upgrade your living space with our exclusive furniture range. Quality craftsmanship and modern designs.",
  },


  keywords: [
    "buy furniture online Pakistan",
    "furniture shops in Lahore",
    "modern home furniture Lahore",
    "luxury sofa sets Lahore",
    "best dining tables Pakistan",
    "DHA Lahore interior decor",
    "affordable luxury furniture Lahore"
  ],
};
export default function page() {



  return (
    <div>
      <ProductsGrid />
    </div>
  )
}
