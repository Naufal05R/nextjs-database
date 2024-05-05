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

export default function Category() {
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
          <SelectItem value="electronics">Electronics</SelectItem>
          <SelectItem value="clothing">Clothing</SelectItem>
          <SelectItem value="home">Home</SelectItem>
          <SelectItem value="sports">Sports</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
