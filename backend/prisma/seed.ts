import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1= await prisma.student.upsert({
    where: { email: 'johndoe@example.com' },
    update: {},
    create: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      age:23,
    },
  });

  const user2= await prisma.student.upsert({
    where: { email: 'sarabutt@example.com' },
    update: {},
    create: {
      name: 'sara butt',
      email: 'sarabutt@example.com',
      age:36,
    },
  });


  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    
    await prisma.$disconnect();
  });

