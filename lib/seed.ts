import { prisma } from "./prisma";

async function main() {
  await prisma.product.create({
    data: {
      name: "Sudarsono's Hackbook Pro",
      description:
        "The best laptop in the world handmade by Sudarsono's Business Family.",
      price: 1999,
      category: "electronics",
      images: {
        createMany: {
          data: [
            {
              url: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              url: "https://media.istockphoto.com/id/1410249336/photo/mock-up-computer-with-natural-flower-glasses-and-coffee-cup-over-the-wooden-table.webp?a=1&s=612x612&w=0&k=20&c=ZJs6C725Kmqfq-cq5ZIVxuSIgo1HSt_3EDvtg4ZLt_g=",
            },
          ],
        },
      },
      reviews: {
        createMany: {
          data: [
            {
              name: "Santoso",
              content: "Best laptop in the world",
              rating: 5,
            },
            {
              name: "Suryanto",
              content: "Solid laptop for work and play.",
              rating: 5,
            },
            {
              name: "Suryono",
              content: "It's Awesome! It would be my daily driver.",
              rating: 4,
            },
          ],
        },
      },
    },
  });
  await prisma.product.create({
    data: {
      name: "Purnomo's Airbook Pro",
      description:
        "The best laptop in the world handmade by Purnomo's Group Company.",
      price: 2999,
      category: "electronics",
      images: {
        createMany: {
          data: [
            {
              url: "https://media.istockphoto.com/id/1410249336/photo/mock-up-computer-with-natural-flower-glasses-and-coffee-cup-over-the-wooden-table.webp?a=1&s=612x612&w=0&k=20&c=ZJs6C725Kmqfq-cq5ZIVxuSIgo1HSt_3EDvtg4ZLt_g=",
            },
            {
              url: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      },
      reviews: {
        createMany: {
          data: [
            {
              name: "Putro",
              content: "It's Awesome! It would be my daily driver.",
              rating: 4,
            },
            {
              name: "Prasetyo",
              content: "Best laptop in the world",
              rating: 4,
            },
            {
              name: "Probo",
              content: "Solid laptop for work and play.",
              rating: 5,
            },
          ],
        },
      },
    },
  });
  await prisma.product.create({
    data: {
      name: "Mulyono's Flamebook Pro",
      description:
        "The best laptop in the world handmade by Mulyono's Incorporation.",
      price: 3999,
      category: "electronics",
      images: {
        createMany: {
          data: [
            {
              url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              url: "https://media.istockphoto.com/id/1410249336/photo/mock-up-computer-with-natural-flower-glasses-and-coffee-cup-over-the-wooden-table.webp?a=1&s=612x612&w=0&k=20&c=ZJs6C725Kmqfq-cq5ZIVxuSIgo1HSt_3EDvtg4ZLt_g=",
            },
            {
              url: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      },
      reviews: {
        createMany: {
          data: [
            {
              name: "Muhartono",
              content: "It's Awesome! It would be my daily driver.",
              rating: 4,
            },
            {
              name: "Mardhono",
              content: "Best laptop in the world, but I mistyped it star.",
              rating: 3,
            },
            {
              name: "Mardiyono",
              content: "Solid laptop for work and play.",
              rating: 4,
            },
          ],
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Arta's Painting Art",
      description:
        "The best painting art in the world handmade by Arta's Handicraft.",
      price: 199,
      category: "home",
      images: {
        createMany: {
          data: [
            {
              url: "https://images.unsplash.com/photo-1533158388470-9a56699990c6?q=80&w=3155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      },
      reviews: {
        createMany: {
          data: [
            {
              name: "Ardra",
              content: "It's Awesome! It would be my daily driver.",
              rating: 4,
            },
            {
              name: "Adit",
              content: "Best Art in the world, and it very beautiful.",
              rating: 5,
            },
          ],
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
