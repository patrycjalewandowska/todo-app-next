import connectMongoDB_ from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Task from "@/models/task";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectMongoDB_();
  await Task.create({ title, description });
  return NextResponse.json({ message: "Zadanie dodane" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB_();
  const tasks = await Task.find();
  return NextResponse.json({ tasks });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB_();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "Zadanie usunięte" }, { status: 200 });
}
