import React from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const AllCourses = () => {
  const [activeFilter, setActiveFilter] = useState("Filter");
  const [isFiltersMenuOpen, setIsFiltersMenuOpen] = useState(false);
  return (
    <section aria-labelledby="current-courses">
      <Container className="p-3">
        <div className="flex justify-between items-center mb-3">
          <h2
            id="recent-courses"
            className="font-semibold text-lg text-brand font-heading"
          >
            Tus cursos recientes
          </h2>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <button
                onClick={() => setIsFiltersMenuOpen(!isFiltersMenuOpen)}
                className="py-1 px-2 rounded-lg flex gap-2 items-center cursor-pointer bg-bg-main hover:bg-border/50 active:bg-border/80"
              >
                <p className="text-xs">{activeFilter}</p>
                <ChevronDownIcon className="size-4" />
              </button>
              {isFiltersMenuOpen && (
                <div className="absolute top-full left-0 bg-bg-main mt-1 rounded-lg">
                  <ul className="flex flex-col text-xs">
                    <li
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setActiveFilter("Todos")}
                    >
                      Todos
                    </li>
                    <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                      Activos
                    </li>
                    <li
                      text-sm
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Finalizados
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <MagnifyingGlassIcon className="size-4" />
            <Button
              className="rounded-full bg-brand p-1 text-white"
              variant="primary"
              loading={false}
            >
              <PlusIcon className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AllCourses;
