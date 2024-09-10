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
  try {
    const newProduct = await prisma.product.create({
      data: {
        ...product,
        images: {
          create: product.images?.map((url) => ({ url })),
        },
      },
    });

    return newProduct;
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Error creating product");
  }
}

export async function getProductById(id: number) {
  // read a Product from the database
}
