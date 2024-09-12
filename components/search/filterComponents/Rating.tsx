"use client";

import { Label } from "@/components/ui/label";
import { useURLQuery } from "@/lib/hooks/useURLQuery";

export default function Rating() {
  const [rating, setRating] = useURLQuery("rating", "", 200);
  return (
    <div className="flex flex-col">
      <Label className="text-base" htmlFor="rating-filter">
        Rating
      </Label>
    </div>
  );
}
