"use client";

import { useURLQuery } from "@/lib/hooks/useURLQuery";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Rating() {
  const [minRating, setMinRating] = useURLQuery("minRating", "");
  return (
    <div>
      <Label className="text-base" htmlFor="rating-filter">
        Rating
      </Label>
      <RadioGroup
        value={minRating}
        onValueChange={(value) => setMinRating(value)}
        className="flex items-center gap-2 mt-1"
        id="rating-filter"
      >
        <Label
          className="flex items-center gap-2 cursor-pointer"
          htmlFor="rating-any"
        >
          <RadioGroupItem id="rating-any" value="" />
          Any
        </Label>
        <Label
          className="flex items-center gap-2 cursor-pointer"
          htmlFor="rating-4-up"
        >
          <RadioGroupItem id="rating-4-up" value="4" />4 & up
        </Label>
        <Label
          className="flex items-center gap-2 cursor-pointer"
          htmlFor="rating-3-up"
        >
          <RadioGroupItem id="rating-3-up" value="3" />3 & up
        </Label>
      </RadioGroup>
    </div>
  );
}
