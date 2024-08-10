"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white dark:text-black rounded-xl w-80 p-2 text-xl focus:outline-none"
        placeholder="Search.."
      />
      <button className="px-3 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
      </button>
    </form>
  );
}
