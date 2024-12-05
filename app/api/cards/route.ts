import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Ensure this matches your project structure

// Handle GET requests (Retrieve all cards)
export async function GET() {
  try {
    const cards = await prisma.card.findMany({
      include: {
        viewDatesArr: true, // This will include the related ViewDatesArr entries for each card
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


