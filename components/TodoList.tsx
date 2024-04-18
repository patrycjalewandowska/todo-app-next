import React from "react";
import RemoveButton from "./RemoveButton";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTasks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/task", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Błąd przy pobieraniu danych");
    }
    return res.json();
  } catch (error) {
    console.log("Error:", error);
  }
};

export default async function TodoList() {
  const { tasks } = await getTasks();
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold">{task.title}</h2>
            <div>{task.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveButton id={task._id} />
            <Link href={`/editTask/${task._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
