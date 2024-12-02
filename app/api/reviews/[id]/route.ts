import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    try {

      const url = new URL(request.url);
      const pathSegments = url.pathname.split('/');
      const id = pathSegments[pathSegments.length - 1];
        const card = await prisma.card.findUnique({
          where: {
            id: id,
          },
          include: {
            viewDatesArr: true,
          },
        });
        if(!card){
          return NextResponse.json(
            { message: "No Card found"},
            { status: 404 }
          );
        }
        const today = new Date().toISOString().split("T")[0];
        const existingViewDate = card.viewDatesArr.find(
          (entry) => {
            return entry.viewDate && entry.viewDate.toISOString().split("T")[0] === today
          }
        );
      
        if (existingViewDate) {
          await prisma.viewDatesArr.update({
            where: {id:existingViewDate.id},
            data: {
              count: existingViewDate.count + 1,
            },
          });

         const data =await prisma.card.update({
          where: { id: card.id},
          data: { views: card.views + 1 },
        });
        console.log(data)
        
        } else {   
          await prisma.viewDatesArr.create({
            data: {
              cardId: card.id,
              viewDate: new Date(),
              count: 1,
            },
          })
        }
        const redirectLink = card.link;
        return NextResponse.json(
          { message: "Review count updated", redirect: redirectLink },
          { status: 200 }
        );
      
    } catch (error) {
      console.log("Error handling PUT request:", error);
      return NextResponse.json({ error: "Failed to handle PUT request" }, { status: 500 });
    }
  }