"use server";

import { unstable_cache as cache, revalidateTag } from "next/cache";

import { prisma } from "@/lib/prisma";

interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  category: string;
  images?: string[];
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

    revalidateTag("Product");
    return product;
  } catch (error) {
    return null;
  }
}

export const getProductById = cache(_getProductById, ["getProductById"], {
  tags: ["Product"],
  revalidate: 60,
});

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

    revalidateTag("Product");
    return true;
  } catch (error) {
    return false;
  }
}
