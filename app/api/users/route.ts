import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Ensure this path is correct based on your project structure

// Handle GET requests (Retrieve all users)
export async function GET() {
  try {
    const users = await prisma.user.findMany();

    // Check if users is an array and not null
    if (!users || users.length === 0) {
      return NextResponse.json({ error: "No users found" }, { status: 404 });
    }

    return NextResponse.json(users);
  } catch (error) {
    // Improve error logging
    if (error instanceof Error) {
      console.error("Error fetching users:", error.message);
    } else {
      console.error("Unknown error fetching users:", error);
    }
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}


// Handle POST requests (Create a new user)
export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: { name, email },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

// Handle PUT requests (Update a user)
export async function PUT(request: Request) {
  try {
    const { id, name, email } = await request.json();

    if (!id || !name || !email) {
      return NextResponse.json(
        { error: "ID, name, and email are required" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, email },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    if (error) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

// Handle DELETE requests (Delete a user)
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json(deletedUser);
  } catch (error) {
    if (error) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    console.error("Error deleting user:", error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
