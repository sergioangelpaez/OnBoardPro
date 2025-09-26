"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [name, setName] = useState("Sergio");
  return (
    <header className="sticky top-0 text-white w-full bg-brand p-5 flex justify-center shadow-lg shadow-black/40 z-10">
      <div className="max-w-app w-full flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Onboard Pro</h1>
        <nav aria-label="Main navigation">
          <ul className="flex gap-7 text-lg">
            <li>
              <Link href="/courses" className="text-white/70 hover:text-white">
                Mis Cursos
              </Link>
            </li>
            <li>
              <Link href="/explore" className="text-white/70 hover:text-white">
                Explora
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="text-white/70 hover:text-white"
              >
                Comunidad
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-3 place-items-center">
          <div className="rounded-full flex items-center justify-center bg-white w-9 h-9">
            <p className="text-brand select-none">{name.charAt(0)}</p>
          </div>
          <p className="text-lg">{name}</p>
          <button className="cursor-pointer hover:bg-white/20 rounded-full p-1 active:bg-white/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
