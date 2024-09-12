"use client";

import { useState } from "react";

import Star from "@/components/product/Stars/StarIcon";

export default function RatingSelect({
  initialStar,
  onChange,
}: {
  initialStar?: number;
  onChange: (rating: number) => void;
}) {
  const [rating, setRating] = useState(initialStar || 0);
  const [hoverRating, setHoverRating] = useState(initialStar || 0);

  const handleRating = (event: any) => {
    const { position } = event.currentTarget.dataset;
    setHoverRating(parseInt(position));
  };
  const resetRating = () => {
    setHoverRating(rating);
  };
  const setRatingAndChange = (_rating: number) => {
    setRating(_rating === rating ? 0 : _rating);
    onChange(_rating === rating ? 0 : _rating);
  };

  const renderStars = Array.from({ length: 5 }, (_, index) => {
    const fill = index < hoverRating ? "fill-primary" : "fill-muted";
    const stroke =
      index < rating ? "stroke-primary" : "stroke-muted-foreground";

    return (
      <span
        className="cursor-pointer"
        data-position={index + 1}
        key={index}
        onMouseOver={handleRating}
        onClick={() => setRatingAndChange(index + 1)}
      >
        <Star
          key={index}
          className={`w-5 h-5 ${fill} ${stroke}`}
          onMouseOver={handleRating}
        />
      </span>
    );
  });

  return (
    <div className="flex items-center" onMouseOut={resetRating}>
      {renderStars}
    </div>
  );
}
