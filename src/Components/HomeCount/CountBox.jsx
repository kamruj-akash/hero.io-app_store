import CountUp from "react-countup";

const CountBox = ({ title, number, numTitle, status }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center p">
        <h3 className="text-[16px] font-normal text-white">{title}</h3>
        <h1 className="font-black text-[64px] text-white">
          <CountUp end={number} />
          {numTitle}
        </h1>
        <p className="text-[16px] font-normal text-white">{status}</p>
      </div>
    </div>
  );
};

export default CountBox;
