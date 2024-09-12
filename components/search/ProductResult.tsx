import Link from "next/link";
import { Product } from "@prisma/client";

import Stars from "@/components/product/Stars";

interface ProductResultProps {
  product: Product & { rating: number; stars: number; image?: string };
}

export default function ProductResult({ product }: ProductResultProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950 overflow-hidden">
      <Link className="block" href={`/product/view/${product.id}`}>
        <img
          src={product.image || "https://dummyimage.com/600x520/000/fff"}
          alt="product"
          className="w-full aspect-video object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <div className="flex items-center gap-1">
            <Stars rating={product.stars} />
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              {product.rating}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
