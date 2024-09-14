import { Suspense } from "react";

import Pagination from "@/components/search/Pagination";
import ProductResult from "@/components/search/ProductResult";
import SearchFilters from "@/components/search/SearchFilters";
import { getProducts } from "@/lib/actions/products";
import { ProductListSkeleton } from "@/components/ui/skeletons";

export default function Page({
  searchParams,
}: {
  searchParams: {
    name: string;
    category: string;
    minRating: string;
    minPrice: string;
    page: string;
  };
}) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-8 px-4 md:px-8 py-20">
      <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950 p-6 space-y-6">
        <SearchFilters />
        <Pagination />
      </div>
      <Suspense key={page} fallback={<ProductListSkeleton length={12} />}>
        <ProductList {...searchParams} page={page} />
      </Suspense>
    </div>
  );
}

interface ProductListProps {
  name: string;
  category: string;
  minRating: string;
  minPrice: string;
  page: number;
}

const ProductList = async (productProps: ProductListProps) => {
  const products = await getProducts(productProps);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 min-w-64 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductResult key={product.id} product={product} />
      ))}
    </div>
  );
};
