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

interface CategoryProps {
  totalProducts: TotalProducts;
}

export default function Category({ totalProducts }: CategoryProps) {
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
          {totalProducts.map(({ category, _count }) => (
            <SelectItem
              key={category}
              sideValue={`${_count.category}`}
              value={category}
              className="capitalize"
            >
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
