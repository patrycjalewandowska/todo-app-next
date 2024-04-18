import connectMongoDB_ from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB_();
  await Task.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    { message: "Zadanie zaktualizowane" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB_();
  const task = await Task.findOne({ _id: id });
  return NextResponse.json({ task }, { status: 200 });
}
