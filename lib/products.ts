"use server";

import { prisma } from "@/lib/prisma";

interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  category: string;
}

export async function createProduct(product: CreateProductInput) {
  const newProduct = await prisma.product.create({
    data: {
      ...product,
      images: {
        create: []
      }
    },
  });

  return newProduct;
}
