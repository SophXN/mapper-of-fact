import { useState } from "react";
import { FactModal } from "./Modal";
import { api } from "~/utils/api";

const oldfacts = [
  {
    title: "Fact One",
    image: "leslie.alexander@example.com",
    id: 1,
    source: "#",
    description: "this is a description of the fact.",
  },
  {
    title: "Fact Two",
    image: "michael.foster@example.com",
    id: 1,
    source: "#",
    description: "this is a description of the fact.",
  },
  {
    title: "Fact Three",
    image: "dries.vincent@example.com",
    id: 1,
    source: "#",
    description: "this is a description of the fact.",
  },
];

//     id: number;
//     title: string | null;
//     description: string | null;
//     image: string | null;
//     source: string | null;

export const SidebarCardList = () => {
  const [open, setOpen] = useState(false);

  const { data: facts } = api.post.getAllFacts.useQuery();

  if (!facts) return null;
  return (
    <>
      <ul
        role="list"
        className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
      >
        {facts.map((fact) => (
          <li
            key={fact.id}
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex min-w-0 gap-x-4" onClick={() => setOpen(true)}>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {fact.title}
                </p>
              </div>
            </div>
            <FactModal open={open} setOpen={setOpen} fact={fact} />
          </li>
        ))}
      </ul>
    </>
  );
};
