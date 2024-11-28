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

// Handle POST requests (Create a new card)
export async function POST(request: Request) {
  try {
    const { name, address, views, image, qrcod, viewDatesArr, link} = await request.json();

    if ( !name || !address || !image || !qrcod || !viewDatesArr) {
      return NextResponse.json(
        { error: "Name, address, views, and image are required" },
        { status: 400 }
      );
    }

    const newCard = await prisma.card.create({
      data: { name, address, views, image, qrcod, link},
    });

    return NextResponse.json(newCard, { status: 201 });
  } catch (error) {
    console.error("Error creating card:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Failed to create card" }, { status: 500 });
  }
}

// Handle PUT requests (Edit card or update review count)
export async function PUT(request: Request) {
  try {
    const url = new URL(request.url); // Get URL details
    const action = url.searchParams.get("action"); // Check for the action type (e.g., "edit" or "review")
    const body = await request.json();

    if (action === "edit") {
      // Handle card editing
      const { id, name, address, image, qrcod, viewDatesArr } = body;

      if (!id || !name || !address || !image || !qrcod || !viewDatesArr) {
        return NextResponse.json(
          { error: "ID, name, address, and image are required for editing" },
          { status: 400 }
        );
      }

      const updatedCard = await prisma.card.update({
        where: { id },
        data: { name, address, image },
      });

      return NextResponse.json(updatedCard, { status: 200 });
    } else if (action === "review") {
      // Handle updating review count and returning redirect URL
      const { id, views } = body;

      if (!id || views === undefined) {
        return NextResponse.json(
          { error: "ID and views are required for updating review count" },
          { status: 400 }
        );
      }

      // Generate a redirect link (replace `some-path` with your actual URL structure)
      const redirectLink = `/cards/${id}/details`;

      return NextResponse.json(
        { message: "Review count updated", redirect: redirectLink },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid action type. Use 'edit' or 'review'." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error handling PUT request:", error);
    return NextResponse.json({ error: "Failed to handle PUT request" }, { status: 500 });
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


