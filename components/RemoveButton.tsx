"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveButton({ id }) {
  const router = useRouter();
  const removeTask = async () => {
    const confirmed = confirm("Czy na pewno chcesz usunąć zadanie?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/task?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTask}>
      <HiOutlineTrash size={24} />
    </button>
  );
}
