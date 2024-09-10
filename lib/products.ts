"use server";

import { prisma } from "@/lib/prisma";

interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  category: string;
  images?: string[];
}

export async function createProduct(product: CreateProductInput) {
  const newProduct = await prisma.product.create({
    data: {
      ...product,
      images: {
        create: product.images?.map((url) => ({ url })),
      },
    },
  });

  return newProduct;
}
