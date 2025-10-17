import React from "react";
import Container from "@/components/Container";
import SubmissionRow from "./SubmissionRow";

interface UpcomingSubmissionsProps {
  className?: string;
}

const UpcomingSubmissions: React.FC<UpcomingSubmissionsProps> = ({}) => {
  return (
    <section aria-labelledby="current-courses">
      <Container className="p-3">
        <div className="flex justify-between items-center mb-3">
          <h2
            id="recent-courses"
            className="font-semibold text-lg text-brand font-heading"
          >
            Tus misiones
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <SubmissionRow />
          <SubmissionRow />
          <SubmissionRow />
        </div>
      </Container>
    </section>
  );
};

export default UpcomingSubmissions;
