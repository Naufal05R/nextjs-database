import {
  Category,
  Name,
  Price,
  Rating,
} from "@/components/search/filterComponents";
import { getTotalProductByCategory } from "@/lib/actions/products";

export default async function SearchFilters() {

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
