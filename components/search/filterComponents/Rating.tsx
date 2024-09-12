"use client";

import { useURLQuery } from "@/lib/hooks/useURLQuery";

export default function Rating() {
  const [rating, setRating] = useURLQuery("rating", "", 200);
  return (
    <div className="flex flex-col">
      
    </div>
  );
}
