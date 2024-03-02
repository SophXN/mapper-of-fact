import { useState } from "react";
import { FactModal } from "./Modal";

const people = [
  {
    name: "Fact One",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Fact Two",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Fact Three",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    href: "#",
    lastSeen: null,
  },
];

export const SidebarCardList = () => {
  const [open, setOpen] = useState(false);
  const tempImageUrl =
    "https://images.unsplash.com/photo-1614683574679-beee9c2ab699?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <ul
        role="list"
        className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
      >
        {people.map((person) => (
          <li
            key={person.email}
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex min-w-0 gap-x-4" onClick={() => setOpen(true)}>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <a href={person.href}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {person.name}
                  </a>
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  <a href="" className="relative truncate hover:underline">
                    {person.email}
                  </a>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <FactModal open={open} setOpen={setOpen} imageUrl={tempImageUrl} />
    </>
  );
};
