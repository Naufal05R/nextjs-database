"use client";

import { useURLQuery } from "@/lib/hooks/useURLQuery";
import { Label } from "@/components/ui/label";

export default function Price() {
  const [minPrice, setMinPrice] = useURLQuery("minPrice", "", 200);
  return (
    <div className="flex flex-col">
      <Label className="text-base" htmlFor="rating-filter">
        Min Price - {minPrice || 0}
      </Label>
      <input
        type="range"
        min="0"
        max="100"
        value={minPrice || 0}
        onChange={(e) => setMinPrice(e.target.value)}
      />
    </div>
  );
}
