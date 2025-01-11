import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const cards = await prisma.card.findMany({
      include: {
        viewDatesArr: true,
      },
    })
    if (!cards || cards.length === 0) {
      return NextResponse.json({ error: "No cards found" }, { status: 404 });
    }

    return NextResponse.json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Failed to fetch cards" }, { status: 500 });
  }
}
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const deletedCard = await prisma.card.delete({
      where: { id },
    });

    return NextResponse.json(deletedCard);
  } catch (error) {
    if (error) {
        return NextResponse.json({ error: "Card not found" }, { status: 404 });
      }
    }
    return NextResponse.json({ error: "Failed to delete card" }, { status: 500 });
  }


  export async function PUT(request: Request) {
    try {
      const { id, name, address, link, viewDatesArr } = await request.json();
      console.log("card:---",id, name, address, link, viewDatesArr)
  
      if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
      }
  
      // Optionally, you can validate the other fields like `name`, `address`, etc. as needed
      if (!name || !address || !link) {
        return NextResponse.json({ error: "Name, address, and link are required" }, { status: 400 });
      }
  
      // Update the card
      const updatedCard = await prisma.card.update({
        where: { id },
        data: {
          name,
          address,
          link,
        },
      });
      console.log("updatedCard:---", updatedCard)
  
      return NextResponse.json(updatedCard);
    } catch (error) {
      console.error("Error updating card:", error instanceof Error ? error.message : error);
      return NextResponse.json({ error: "Failed to update card" }, { status: 500 });
    }
  }

