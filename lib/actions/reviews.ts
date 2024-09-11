"use server";

import { prisma } from "@/lib/prisma";

interface CreateReviewInput {
  name: string;
  rating: number;
  content: string;
  productId: number;
}

export async function createReview(review: CreateReviewInput) {
  try {
    const newReview = await prisma.review.create({
      data: {
        ...review,
      },
    });

    return newReview;
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Error creating product");
  }
}
