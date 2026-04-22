
import ProductCard from "@/components/ui/products/ProductCard";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";


  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const slugToCategory = (slug?: string) => {
  if (!slug) return "";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export async function generateMetadata({
  params,
}: {
  params: { category?: string };
}): Promise<Metadata> {
  const { category } = await params;
  const formattedCategory = slugToCategory(category);

return {

  title: `${formattedCategory} in Lahore | Premium Furniture & Interior Solutions`,

  description: `Elevate your home with the finest ${formattedCategory} in Lahore. From modern minimalist designs to luxury bespoke interiors in DHA and Gulberg, explore our premium collections today.`,
  
  alternates: {
   canonical: `${baseUrl}/products/${formattedCategory.toLowerCase()}`,
  },
  
  openGraph: {
    title: `Best ${formattedCategory} Store in Lahore | Custom Interior Design`,
    description: `Discover luxury ${formattedCategory} crafted for modern Pakistani homes. Visit our Lahore showroom for bespoke furniture and turnkey interior solutions.`,
    url: `${baseUrl}/products/${formattedCategory.toLowerCase()}`,
    siteName: 'Beyond Interior Design', 
    images: [
      {
        url: '/images/og-lahore-showroom.jpg',
        width: 1200,
        height: 630,
        alt: `Luxury ${formattedCategory} at our Lahore Showroom`,
      },
    ],
    type: "website",
    locale: "en_PK", 
  },


  keywords: [
    `${formattedCategory} Lahore`,
    "furniture stores in Lahore",
    "interior designers in Lahore",
    "modern furniture Pakistan",
    "luxury home decor Lahore",
    "DHA Lahore furniture",
    "bespoke interior design Pakistan"
  ],

  twitter: {
    card: "summary_large_image",
    title: `Premium ${formattedCategory} | Lahore's Finest Interiors`,
    description: `Shop the latest trends in ${formattedCategory}. Custom designs available at our Lahore workshop.`,
  },
};
}
 



export default async function Page({
  params,
}: {
  params: { category?: string };
}) {
  const { category } = await params;

  if (!category) {
    notFound();
  }

  const formattedCategory = slugToCategory(category);

  const query = new URLSearchParams();
  query.set("category", formattedCategory);


  const res = await fetch(
    `${baseUrl}/api/products?${query.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <p>Failed to fetch products</p>;
  }

  const data = await res.json();

  return (
    <div className="mt-12 p-5 lg:p-10">
      <h1 className="text-xl lg:text-4xl mt-12 p-5">
        Shop {" "}
        {formattedCategory}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 gap-y-30 md:gap-y-23 w-full py-10">
        {data.map((product: any) => (
          <ProductCard data={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}
