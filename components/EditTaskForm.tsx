"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTaskForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/task/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Błąd podczas aktualizowania zadania");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        className="border border-slate-500 px-8 py-2"
        type="text"
        value={newTitle}
        placeholder="Tytuł zadania"
      ></input>

      <input
        className="border border-slate-500 px-8 py-2"
        onChange={(e) => setNewDescription(e.target.value)}
        type="text"
        placeholder="Opis zadania"
        value={newDescription}
      ></input>

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Zapisz Zadanie
      </button>
    </form>
  );
}
