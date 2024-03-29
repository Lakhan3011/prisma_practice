import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
  const res = await prisma.user.findFirst({
    where: {
      email: username,
    },
  });
  console.log(res);
}

getUser("lk@gmail.com");
