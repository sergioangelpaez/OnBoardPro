import React from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import CourseRow from "./CourseRow";

const AllCourses = () => {
  const filterOptions = ["Todos", "Activos", "Finalizados"];
  const [activeFilter, setActiveFilter] = useState(filterOptions[0]);
  const [isFiltersMenuOpen, setIsFiltersMenuOpen] = useState(false);

  const handleFilterChange = ({ filter }: { filter: string }) => {
    setActiveFilter(filter);
    setIsFiltersMenuOpen(false);
  };

  return (
    <section aria-labelledby="current-courses">
      <Container className="p-3">
        {/** Header */}
        <div className="flex justify-between items-center mb-3">
          <h2
            id="recent-courses"
            className="font-semibold text-lg text-brand font-heading"
          >
            Todos tus cursos
          </h2>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <button
                onClick={() => setIsFiltersMenuOpen(!isFiltersMenuOpen)}
                className={`py-1 px-2 rounded-lg flex gap-2 items-center cursor-pointer ${
                  activeFilter == "Todos"
                    ? "bg-bg-main hover:bg-border/50 active:bg-border/80"
                    : "bg-brand hover:bg-brand-hover active:bg-brand-active text-white"
                }`}
              >
                <p className="text-sm">{activeFilter}</p>
                <ChevronDownIcon className="size-4" />
              </button>
              {isFiltersMenuOpen && (
                <div className="absolute top-full left-0 mt-2 shadow-xl bg-white min-w-fit w-full rounded-lg">
                  <ul className="flex flex-col text-sm">
                    {filterOptions.map((filter) => (
                      <li
                        key={filter}
                        className="px-3 py-2 hover:bg-border/50 cursor-pointer"
                        onClick={() => handleFilterChange({ filter })}
                      >
                        {filter}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <MagnifyingGlassIcon className="size-5" />
            <Button
              className="rounded-full bg-brand p-1 text-white"
              variant="primary"
              loading={false}
            >
              <PlusIcon className="size-4" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <CourseRow />
          <CourseRow />
          <CourseRow />
        </div>
      </Container>
    </section>
  );
};

export default AllCourses;
