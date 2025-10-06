import React from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import { PlusIcon } from "@heroicons/react/24/solid";

const RecentCourses = () => {
  return (
    <section aria-labelledby="recent-courses">
      <Container className="p-3">
        <div className="flex justify-between items-center mb-3">
          <h2
            id="recent-courses"
            className="font-semibold text-lg text-brand font-heading"
          >
            Tus cursos recientes
          </h2>
          <Button
            type="button"
            className="flex items-center gap-2 px-2 h-fit"
            variant="primary"
            loading={false}
          >
            <PlusIcon className="size-4" />
            <p className="text-sm">Add course</p>
          </Button>
        </div>

        <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-3">
          <CourseCard />
          <CourseCard />
          <div className="flex flex-col cursor-pointer hover:bg-brand/5 items-center justify-center border-1 text-text-secondary border-dashed border-border rounded-lg">
            <p>Add a new course</p>
            <p>+</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecentCourses;
