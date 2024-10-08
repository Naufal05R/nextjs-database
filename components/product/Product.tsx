import { Image, Product, Review } from "@prisma/client";

import Stars from "@/components/product/Stars";
import ImageDisplay from "@/components/product/ImageDisplay";
import { calculateScore, formatPrice } from "@/lib/utils";

export interface ProductViewProps extends Product {
  images: Image[];
  reviews: Review[];
}

export default function ProductView({
  product,
}: {
  product: ProductViewProps;
}) {
  const { name, description, price } = product;

  if (!product) {
    return <div>Product not found</div>;
  }

  const averageScore = calculateScore(
    product.reviews,
    "rating",
    "round"
  ).average;

  const imageUrls = product.images.map(({ url }) => url);
  return (
    <div className="grid gap-6">
      <ImageDisplay images={imageUrls} />
      <div className="grid gap-2">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold">{formatPrice(price)}</span>
          <div className="flex items-center gap-0.5">
            <Stars rating={averageScore} />
          </div>
        </div>
      </div>
    </div>
  );
}
