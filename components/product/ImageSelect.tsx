"use client";
import { PlusIcon, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ImageSelect({
  onChange,
}: {
  onChange: (value: string[]) => void;
}) {
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const handleAddImage = () => {
    setNumImages(numImages + 1);
  };
  const handleImageChange = (index: number, value: string) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };
  const handleImageRemove = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    setNumImages(numImages - 1);
  };

  useEffect(() => {
    onChange(images);
  }, [images, onChange]);

  return (
    <div className="grid gap-2">
      <Label>Images</Label>
      <div className="grid gap-4  ">
        {[...Array(numImages)].map((_, index) => (
          <div key={index} className="flex gap-x-4">
            <Input
              placeholder={`Image URL ${index + 1}`}
              value={images[index]}
              onChange={(e) => handleImageChange(index, e.target.value)}
            />
            <Button
              size="icon"
              variant="outline"
              onClick={() => handleImageRemove(index)}
            >
              <TrashIcon className="h-4 w-4" />
              <span className="sr-only">Add Image</span>
            </Button>
          </div>
        ))}
        <Button size="icon" variant="outline" onClick={handleAddImage}>
          <PlusIcon className="h-4 w-4" />
          <span className="sr-only">Add Image</span>
        </Button>
      </div>
    </div>
  );
}
