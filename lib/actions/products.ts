"use server";

import { unstable_cache as cache } from "next/cache";

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

async function _getProductById(id: number) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        images: true,
        reviews: true,
      },
    });

    return product;
  } catch (error) {
    return null;
  }
}

export const getProductById = cache(_getProductById, ["getProductById"], {
  tags: ["Product"],
});

export async function updateProduct(id: number, product: CreateProductInput) {
  try {
    const updatedProduct = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        images: {
          deleteMany: {},
          create: product.images?.map((url) => ({ url })),
        },
      },
    });

    return updatedProduct;
  } catch (error) {
    return null;
  }
}

export async function deleteProduct(id: number) {
  try {
    await prisma.product.delete({
      where: {
        id,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}
