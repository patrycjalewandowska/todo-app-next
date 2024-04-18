import Link from "next/link";
export default function NavBar() {
  return (
    <nav className=" rounded-md flex justify-between items-center bg-slate-600 px-8 py-3">
      <Link className="text-white font-bold " href={"/"}>
        TodoAPP
      </Link>
      <Link className="bg-white p-2" href={"/addTask"}>
        Dodaj zadanie
      </Link>
    </nav>
  );
}
