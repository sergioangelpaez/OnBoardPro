import React from "react";

const CourseRow = () => {
  return (
    <article
      className={`border border-border/50 shadow-md hover:shadow-lg transition rounded-lg p-2 grid grid-cols-2 h-20`}
    >
      <div className="grid grid-cols-[0.5fr_1fr] gap-3">
        <div>
          <img
            src="/reactbanner.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p>HJola</p>
        </div>
      </div>
    </article>
  );
};

export default CourseRow;
