import {
  Category,
  Name,
  Price,
  Rating,
} from "@/components/search/filterComponents";
import { getAllTotalProductsByCategory } from "@/lib/actions/products";

export default async function SearchFilters() {
  const totalProducts = await getAllTotalProductsByCategory();

  return (
    <div>
      <h3 className="text-lg font-semibold">Filters</h3>
      <div className="grid gap-4 mt-4">
        <Name />
        <Price />
        <Rating />
        <Category totalProducts={totalProducts} />
      </div>
    </div>
  );
}
