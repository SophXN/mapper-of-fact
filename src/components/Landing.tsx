import React from "react";
import { Map } from "./Map";
import { Sidebar } from "./SidebarContainer";
import { HeartIcon } from "@heroicons/react/20/solid";

export const Landing: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="h-screen w-screen bg-black px-6 py-20 sm:py-2">
      <Map />
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <HeartIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
};
