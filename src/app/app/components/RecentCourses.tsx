import React from "react";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CourseCard from "@/components/CourseCard";
import { PlusIcon } from "@heroicons/react/24/solid";

const RecentCourses = () => {
  return (
    <section aria-labelledby="recent-courses">
      <Container className="p-3 bg-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2
            id="recent-courses"
            className="font-semibold text-lg text-brand font-heading"
          >
            Tus cursos recientes
          </h2>

          <Button
            type="button"
            variant="default"
            className="flex items-center gap-2 px-2 h-fit"
          >
            <PlusIcon className="w-4 h-4" />
            <span className="text-sm">Agregar curso</span>
          </Button>
        </div>

        {/* Mobile Scrollable Courses */}
        <div className="md:hidden">
          <ScrollArea className="w-full">
            <div className="flex gap-3 pb-3">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-1 gap-3">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </Container>
    </section>
  );
};

export default RecentCourses;
