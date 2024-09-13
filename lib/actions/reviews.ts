"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@/lib/prisma";

interface CreateReviewInput {
  name: string;
  rating: number;
  content: string;
  productId: number;
}

export async function getTotalElectronicsReview() {}
export async function getTotalClothingReview() {}
export async function getTotalHomeReview() {}
export async function getTotalSportsReview() {}

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

    revalidateTag("Product");
    return newReview;
  } catch (error) {
    console.error("Error creating review: ", error);
    throw new Error("Error creating review");
  }
}
