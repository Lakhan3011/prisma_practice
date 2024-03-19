import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "l@gmail.com",
      name: "lakhan",
      posts: {
        create: [
          {
            title: "lakhan title 1",
          },
          {
            title: "lakhan title 2",
          },
        ],
      },
    },
  });
}

main();
