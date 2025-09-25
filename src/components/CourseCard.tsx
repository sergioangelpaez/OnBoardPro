import { StarIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

interface CourseCardProps {
  courseName: string;
  className?: string;
  bannerRoute?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseName = "",
  className = "",
  bannerRoute = "/ucentralbg/jpg",
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={` bg-card-bg rounded-md shadow-lg w-full ${className} transition duration-300 hover:scale-102 hover:border-1 border-border`}
    >
      <div className="h-[50%]">
        <img
          src={bannerRoute}
          alt=""
          className="object-cover h-full w-full rounded-t-md"
          draggable={false}
        />
      </div>
      <div className="p-2 flex gap-5 flex-col">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Course Title</h1>
            <button className="rounded-full w-8 h-8 border border-border flex items-center cursor-pointer hover:bg-black/10 justify-center active:bg-black/20">
              <StarIcon className="size-5" />
            </button>
          </div>
          <div>
            <p className="text-sm text-ellipsis line-clamp-3 text-text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              pulvinar euismod libero quis porttitor. Mauris nec elit id leo
              tincidunt aliquet porta malesuada augue.
            </p>
          </div>
        </div>
        <Button
          loading={false}
          variant="primary"
          className="px-2 py-1 w-[50%] justify-center flex items-center gap-2"
        >
          <p>Ver curso</p>
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
