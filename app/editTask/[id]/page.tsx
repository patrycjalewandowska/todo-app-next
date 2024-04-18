import EditTaskForm from "@/components/EditTaskForm";

const getTaskById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/task/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Nie udało się pobrać zadania");
    }
    const data = await res.json();
    return data.task;
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTask({ params }) {
  const { id } = params;
  const task = await getTaskById(id);
  const title = task.title;
  const description = task.description;
  return <EditTaskForm id={id} title={title} description={description} />;
}
