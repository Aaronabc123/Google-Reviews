import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server'
import { prisma } from "@/lib/prisma";

export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // Get user's information
  const user = await currentUser();
  if (!user) {
    return new NextResponse('User not exist', { status: 404 });
  }

  let dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        name: user.firstName ?? '',
        email: user.emailAddresses[0].emailAddress ?? '',
      },
    });
  }

  if (dbUser) {
    return NextResponse.json(
      { message: "User added", data: dbUser },
      { status: 200 }
    );
  }
  return new NextResponse(null, {
    status: 302, // 302 Found - temporary redirect
    headers: {
      Location: 'https://google-review-fai.vercel.app/dashboard',
    },
  });

}
