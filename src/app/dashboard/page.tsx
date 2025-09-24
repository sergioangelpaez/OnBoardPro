import Divider from "@/components/Divider";

const Dashboard = () => {
  return (
    <div className="p-5 grid grid-cols-3 grid-rows-2 h-full">
      <div className="col-start-1 row-start-1 flex items-center">
        <div className="flex gap-5">
          <div className="rounded-full flex items-center justify-center text-white text-5xl bg-brand w-30 h-30">
            <p>S</p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <div>
              <p className="text-text-secondary text-xl">Bienvenido,</p>
              <p className="text-3xl text-brand font-semibold">Sergio Angel</p>
            </div>
            <Divider />
          </div>
        </div>
      </div>
      <div className="col-start-2"></div>
      <div className="col-start-"></div>
    </div>
  );
};

export default Dashboard;
