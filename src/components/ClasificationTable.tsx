import React from "react";
import Container from "./Container";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ClasificationTableRow from "./ClasificationTableRow";

const ClasificationTable = () => {
  const filterOptions = [
    "Filtrar",
    "Esta semana",
    "Semana pasada",
    "Otro rango...",
  ];
  const [isFiltersMenuOpen, setIsFiltersMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(filterOptions[0]);

  const handleFilterChange = ({ filter }: { filter: string }) => {
    setActiveFilter(filter);
    setIsFiltersMenuOpen(false);
  };

  return (
    <aside aria-labelledby="online-users">
      <Container className="p-2 flex gap-2 flex-col">
        <div className="flex items-center justify-between min-w-0 gap-3">
          <h2
            id="recent-courses"
            className="font-semibold text-lg text-brand font-heading truncate"
          >
            Clasificación Semanal
          </h2>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <button
                onClick={() => setIsFiltersMenuOpen(!isFiltersMenuOpen)}
                className={`py-1 px-2 rounded-lg flex gap-2 items-center cursor-pointer ${
                  activeFilter == "Filtrar"
                    ? "bg-bg-main hover:bg-border/50 active:bg-border/80"
                    : "bg-accent hover:bg-accent-hover active:bg-accent-active text-white"
                }`}
              >
                <p className="text-sm truncate line-clamp-1 max-w-30 xl:max-w-full">
                  {activeFilter}
                </p>
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
          </div>
        </div>

        <ul className="space-y-2 mt-2">
          <li className="flex items-center flex-col gap-3 justify-between">
            <ClasificationTableRow place={1} />
            <ClasificationTableRow place={2} />
            <ClasificationTableRow place={3} />
            <ClasificationTableRow place={4} />
            <ClasificationTableRow place={6} />
            <ClasificationTableRow place={7} />
          </li>
        </ul>
      </Container>
    </aside>
  );
};

export default ClasificationTable;
