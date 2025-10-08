import { FaDownload, FaStar } from "react-icons/fa6";

const AppCard = ({ appData }) => {
  const { image, title, ratingAvg, downloads } = appData;

  return (
    <div className="bg-white p-5">
      <div className="min-h-[316px] max-w-[316px] rounded-xl bg-gray-200 overflow-hidden">
        <img className="min-w-full min-h-full" src={image} alt={title} />
      </div>
      <h1 className="text-xl font-medium text-[#001931] mt-5 mb-1">{title}</h1>
      <div className="flex justify-between">
        <p
          className="bg-[#F1F5E8] py-2 px-3 items-center justify-center
         rounded-md text-green-500 flex gap-1 text-[16px] font-medium"
        >
          <FaDownload /> {downloads}
        </p>
        <p
          className="bg-[#FFF0E1] py-2 px-3 items-center justify-center
         rounded-md text-orange-500 flex gap-1 text-[16px] font-medium"
        >
          <FaStar /> {ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default AppCard;
