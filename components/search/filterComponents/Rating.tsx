"use client";

import RatingSelect from "@/components/product/Review/RatingSelect";
import { Label } from "@/components/ui/label";
import { useURLQuery } from "@/lib/hooks/useURLQuery";

export default function Rating() {
  const { 1: setRating } = useURLQuery("rating", "");
  return (
    <div className="flex flex-col">
      <Label className="text-base" htmlFor="rating-filter">
        Rating
      </Label>
      <RatingSelect onChange={(s: number) => setRating(String(s || ""))} />
    </div>
  );
}
