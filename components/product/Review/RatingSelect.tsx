"use client";

import { useState } from "react";

import Star from "@/components/product/Stars/StarIcon";

export default function RatingSelect({
  onChange,
}: {
  onChange: (rating: number) => void;
}) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (event: any) => {
    const { position } = event.currentTarget.dataset;
    setHoverRating(parseInt(position));
  };
  const resetRating = () => {
    setHoverRating(rating);
  };
  const setRatingAndChange = (rating: number) => {
    setRating(rating);
    onChange(rating);
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
