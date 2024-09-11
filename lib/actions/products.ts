"use server";

import { unstable_cache as cache, revalidateTag } from "next/cache";

import { prisma } from "@/lib/prisma";
import { calculateScore } from "../utils";

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

    return product;
  } catch (error) {
    console.error("Error getting product: ", error);
    throw new Error("Error getting product");
  }
}

export const getProductById = cache(_getProductById, ["getProductById"], {
  tags: ["Product"],
  revalidate: 60,
});

export async function getProducts() {
  try {
    const allProducts = await prisma.product.findMany({
      include: {
        images: true,
        reviews: true,
      },
      skip: 0,
      take: 10,
    });

    const products = allProducts.map((product) => {
      return {
        ...product,
        rating: calculateScore(product.reviews, "rating").average,
        stars: calculateScore(product.reviews, "rating", "round").average,
        image: product.images[0]?.url,
      };
    });

    return products;
  } catch (error) {
    console.error("Error getting all products: ", error);
    throw new Error("Error getting all products");
  }
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

    revalidateTag("Product");
    return newProduct;
  } catch (error) {
    console.error("Error creating product: ", error);
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
    console.error("Error updating product: ", error);
    throw new Error("Error updating product");
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
    console.error("Error deleting product: ", error);
    throw new Error("Error deleting product");
  }
}
