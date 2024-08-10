import { Loader } from "lucide-react";

export default async function loading() {
  return (
    <div className=" flex items-center justify-center h-screen dark:bg-black">
      <Loader className="animate-spin" size={40} color="white" />
    </div>
  );
}
