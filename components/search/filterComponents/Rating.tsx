"use client";

import RatingSelect from "@/components/product/Review/RatingSelect";
import { Label } from "@/components/ui/label";
import { useURLQuery } from "@/lib/hooks/useURLQuery";

export default function Rating() {
  const [rating, setRating] = useURLQuery("minRating", "");
  return (
    <div className="flex flex-col">
      <Label className="text-base" htmlFor="rating-filter">
        Rating
      </Label>
      <RatingSelect
        initialStar={Number(rating)}
        onChange={(star: number) => setRating(String(star || ""))}
      />
    </div>
  );
}
