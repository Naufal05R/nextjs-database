"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useURLQuery } from "@/lib/hooks/useURLQuery";
import { getAllTotalProductsByCategory } from "@/lib/actions/products";

type TotalProducts = Awaited<ReturnType<typeof getAllTotalProductsByCategory>>;

export default function Category({
  totalProducts,
}: {
  totalProducts: TotalProducts;
}) {
  const [category, setCategory] = useURLQuery("category", "all");
  return (
    <div>
      <Label className="text-base" htmlFor="category-filter">
        Category
      </Label>
      <Select
        defaultValue={category}
        onValueChange={(value) => setCategory(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem
            sideValue={`${totalProducts.electronics}`}
            value="electronics"
          >
            Electronics
          </SelectItem>
          <SelectItem sideValue={`${totalProducts.clothing}`} value="clothing">
            Clothing
          </SelectItem>
          <SelectItem sideValue={`${totalProducts.home}`} value="home">
            Home
          </SelectItem>
          <SelectItem sideValue={`${totalProducts.sports}`} value="sports">
            Sports
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
