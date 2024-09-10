"use server";

// import our generated Prisma Client
import { prisma } from "@/lib/prisma";

interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  category: string;
}

export async function createProduct() {
  // TODO: create a new Product in the database
}
