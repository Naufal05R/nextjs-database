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
        
    } catch (error) {
        
    }
}
