//https://kr.pinterest.com/pin/656188608193494660/
//https://blog.logrocket.com/wp-content/uploads/2023/12/Card-states.png

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
      className={` bg-card-bg rounded-md shadow-lg w-full ${className} cursor-pointer transition duration-300 hover:scale-103 h-full hover:border-1 border-border`}
    >
      <div className="rounded-sm h-[45%]">
        <img src={bannerRoute} alt="" className="h-full w-full rounded-t-md" />
      </div>
    </div>
  );
};

export default CourseCard;
