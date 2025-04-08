import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "Missing key parameter" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("CAClub"); // Your database name

    // Search by the 'key' field instead of '_id'
    const data = await db.collection("MCQ").findOne({ key: key });

    if (!data) {
      return NextResponse.json({ error: "MCQ not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
