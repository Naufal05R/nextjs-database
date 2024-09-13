"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@/lib/prisma";

interface CreateReviewInput {
  name: string;
  rating: number;
  content: string;
  productId: number;
}

export async function getTotalReviewByCategory(category: string) {
  try {
    const totalReview = await prisma.review.count({
      where: {
        product: {
          category,
        },
      },
    });

    return totalReview;
  } catch (error) {
    console.error(`Error getting total ${category} review: `);
    throw new Error(`Error getting total ${category} review`);
  }
}

export async function getTotalSportsReview() {
  try {
    const totalReview = await prisma.review.count({
      where: {
        product: {
          category: "sports",
        },
      },
    });

    return totalReview;
  } catch (error) {
    console.error("Error getting total sports review: ");
    throw new Error("Error getting total sports review");
  }
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

    revalidateTag("Product");
    return newReview;
  } catch (error) {
    console.error("Error creating review: ", error);
    throw new Error("Error creating review");
  }
}
