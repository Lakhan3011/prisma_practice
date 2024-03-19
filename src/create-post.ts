import { PrismaClient } from "@prisma/client";
import { info } from "console";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.post.create({
    data: {
      title: "title of post",
      content: "content of post",
      published: true,
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
