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
        name: review.name,
        rating: review.rating,
        content: review.content,
        product: {
          connect: {
            id: review.productId,
          },
        },
      },
    });

    return newReview;
  } catch (error) {
    console.error("Error creating review: ", error);
    throw new Error("Error creating review");
  }
}
