import CountUp from "react-countup";
import { FaDownload, FaStar } from "react-icons/fa6";
import { NavLink } from "react-router";

const AppCard = ({ appData }) => {
  const { id, image, title, ratingAvg, downloads } = appData;

  return (
    <NavLink
      to={`/appDetails/${id}`}
      className="bg-white p-5 cursor-pointer rounded-xl shadow-md transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 group"
    >
      <div className="max-h-[316px] min-h-[250px] w-full rounded-xl overflow-hidden flex justify-center items-center bg-gray-100 group-hover:scale-105 transition-transform duration-300">
        <img src={image} alt={title} className="object-contain h-full" />
      </div>
      <h1 className="text-xl font-semibold text-[#001931] mt-5 mb-1 transition-colors duration-300 group-hover:text-[#5F27CD]">
        {title}
      </h1>
      <div className="flex justify-between">
        <p className="bg-[#F1F5E8] py-2 px-3 rounded-md text-green-500 flex gap-1 text-[16px] font-medium items-center">
          <FaDownload /> <CountUp end={downloads} />M
        </p>
        <p className="bg-[#FFF0E1] py-2 px-3 rounded-md text-orange-500 flex gap-1 text-[16px] font-medium items-center">
          <FaStar /> {ratingAvg}
        </p>
      </div>
    </NavLink>
  );
};

export default AppCard;
