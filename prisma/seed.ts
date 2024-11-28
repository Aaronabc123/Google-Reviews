import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create cards with view dates and counts
  const card1 = await prisma.card.create({
    data: {
      name: 'Starbucks Reserve Roastery New York',
      address: '61 9th Ave, New York, NY 10011, USA',
      link: 'https://www.starbucks.com',
      views: 25,
      image: '/images/gcard.png',
      qrcod: '/images/qrcod.png',
      viewDatesArr: {
        create: [
          { viewDate: new Date('2024-10-23'), count: 5 },
          { viewDate: new Date('2024-10-25'), count: 7 },
          { viewDate: new Date('2024-11-19'), count: 13 },
          { viewDate: new Date('2024-11-21'), count: 10 },
          { viewDate: new Date('2024-11-24'), count: 4 },
          { viewDate: new Date('2024-11-25'), count: 9 },
        ],
      },
    },
  });

  const card2 = await prisma.card.create({
    data: {
      name: 'Starbucks Downtown LA',
      address: '1111 S Hope St, Los Angeles, CA 90015, USA',
      link: 'https://www.starbucks.com',
      views: 18,
      image: '/images/gcard.png',
      qrcod: '/images/qrcod.png',
      viewDatesArr: {
        create: [
          { viewDate: new Date('2024-10-23'), count: 3 },
          { viewDate: new Date('2024-10-25'), count: 8 },
          { viewDate: new Date('2024-11-19'), count: 12 },
          { viewDate: new Date('2024-11-21'), count: 5 },
          { viewDate: new Date('2024-11-24'), count: 6 },
          { viewDate: new Date('2024-11-25'), count: 3 },
        ],
      },
    },
  });

  const card3 = await prisma.card.create({
    data: {
      name: 'Starbucks Vancouver',
      address: '700 W Pender St, Vancouver, BC V6C 1G8, Canada',
      link: 'https://www.starbucks.com',
      views: 10,
      image: '/images/gcard.png',
      qrcod: '/images/qrcod.png',
      viewDatesArr: {
        create: [
          { viewDate: new Date('2024-10-23'), count: 2 },
          { viewDate: new Date('2024-10-25'), count: 4 },
          { viewDate: new Date('2024-11-19'), count: 8 },
          { viewDate: new Date('2024-11-21'), count: 7 },
          { viewDate: new Date('2024-11-24'), count: 9 },
          { viewDate: new Date('2024-11-25'), count: 4 },
        ],
      },
    },
  });

  console.log('Seeding complete!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
