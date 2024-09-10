import { Product } from "@prisma/client";

import Stars from "@/components/product/Stars";
import ImageDisplay from "@/components/product/ImageDisplay";

export default function ProductView({ product }: { product: Product }) {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="grid gap-6">
      <ImageDisplay />
      <div className="grid gap-2">
        <h1 className="text-3xl font-bold">Acme Prism T-Shirt</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Elevate your style with our Acme Prism T-Shirt, a unique blend of
          comfort and modern design. Crafted with a meticulous composition of
          60% combed ringspun cotton and 40% polyester jersey, this tee offers a
          soft and breathable feel that will keep you feeling fresh all day
          long.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold">$49.99</span>
          <div className="flex items-center gap-0.5">
            <Stars rating={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
