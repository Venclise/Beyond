import ProductCard from "@/components/ui/products/ProductCard";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const slugToCategory = (slug?: string) => {
  if (!slug) return "";
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// Hardcoded static params for all subcategory pages
export async function generateStaticParams() {
  return [
    { category: "bedroom", subcategory: "bed-sets" },
    { category: "bedroom", subcategory: "side-table" },
    { category: "living-room", subcategory: "sofa" },
    { category: "living-room", subcategory: "chair" },
    { category: "living-room", subcategory: "coffee-table" },
    { category: "dining-room", subcategory: "table" },
    { category: "dining-room", subcategory: "chair" },
    { category: "kids", subcategory: "bed" },
    { category: "kids", subcategory: "study-desk" },
    { category: "kids", subcategory: "chair" },
    { category: "kids", subcategory: "toy-storage" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { category?: string; subcategory?: string };
}) {
  const { category, subcategory } = await params;

  const formattedCategory = slugToCategory(category);
  const formattedSubCategory = slugToCategory(subcategory);

  const location = "Lahore, Pakistan";
  const brandName = "Beyond Interior";

  const pageTitle = subcategory
    ? `Premium ${formattedSubCategory} in ${formattedCategory} | ${brandName} Lahore`
    : `Luxury ${formattedCategory} Furniture | ${brandName} Lahore`;

  const description = `Discover high-quality ${
    formattedSubCategory || formattedCategory
  } in ${location}. From modern designs in DHA to bespoke luxury furniture in Gulberg, find the perfect pieces for your home at ${brandName}.`;

  const path = subcategory ? `${category}/${subcategory}` : `${category}`;

  return {
    title: pageTitle,
    description: description,
    alternates: {
      canonical: `${baseUrl}/${path}`,  // fixed: removed /products/ prefix to match sitemap
    },
    openGraph: {
      title: pageTitle,
      description: description,
      url: `${baseUrl}/${path}`,
      siteName: brandName,
      locale: "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    keywords: [
      `${formattedSubCategory} price in Lahore`,
      `${formattedCategory} furniture Lahore`,
      "luxury interior design Lahore",
      "DHA Lahore furniture shops",
      "modern home decor Pakistan",
      "custom made furniture Lahore",
    ],
  };
}

export default async function Page({
  params,
}: {
  params: { category?: string; subcategory?: string };
}) {
  const { category, subcategory } = await params;

  const formattedCategory = slugToCategory(category);
  const formattedSubCategory = slugToCategory(subcategory);

  const query = new URLSearchParams({
    category: formattedCategory,
    subcategory: formattedSubCategory,
  });

  const res = await fetch(`${baseUrl}/api/products?${query.toString()}`, {
    next: { revalidate: 3600 }, // cache for 1 hour instead of no-store
  });

  if (!res.ok) {
    return <p>Failed to fetch products</p>;
  }

  const data = await res.json();

  return (
    <div className="mt-12 p-5 lg:p-10">
      <h1 className="text-xl lg:text-4xl mt-12 p-5">
        Shop {formattedSubCategory} in {formattedCategory}
      </h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 py-20">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 gap-y-30 md:gap-y-23 w-full py-10">
          {data.map((product: any) => (
            <ProductCard data={product} key={product._id} />
          ))}
        </div>
      )}
    </div>
  );
}