import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create Users
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      userType: 'standard',
      subscriptionDate: ['2024-11-01'],
      card: {
        create: [
          {
            name: 'Starbucks Downtown LA',
            address: '1111 S Hope St, Los Angeles, CA 90015, USA',
            link: 'https://g.page/r/CYPTkct1jx9NEBM/review',
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
            }
          },
          {
            name: 'Downtown LA',
            address: '16 S Hope St, Los Angeles, CA 90015, USA',
            link: 'https://g.page/r/CYPTkct1jx9NEBM/review',
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
            }
          }
        ]
      }
    }
  })

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      userType: 'free',
      subscriptionDate: ['2024-10-15'],
      card: {
        create: [
          {
            name: 'Starbucks Reserve Roastery New York',
            address: '61 9th Ave, New York, NY 10011, USA',
            link: 'https://g.page/r/CYPTkct1jx9NEBM/review',
            views: 25,
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
            }
          }
        ]
      }
    }
  })

  console.log('Users and cards created: ', user1, user2)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
