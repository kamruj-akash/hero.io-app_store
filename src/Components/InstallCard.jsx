import { BiStar } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";

const InstallCard = ({ appData, uninstallationHandler }) => {
  const { id, title, size, reviews, downloads } = appData || [];

  return (
    <>
      <div className="flex  items-center justify-between p-5 bg-white rounded-2xl mb-5">
        <div className="flex gap-8 items-center">
          <div className="w-20 h-20 rounded-xl bg-gray-400">
            <img src="ims" alt="" />
          </div>
          <div>
            <h1 className="font-medium text-xl text-[#001931] mb-1">{title}</h1>
            <div className="flex gap-5 items-center">
              <div className="flex gap-1 items-center text-green-500">
                <FaDownload /> {downloads}
              </div>
              <div className="flex gap-1 items-center text-orange-500">
                <BiStar /> {reviews}
              </div>
              <h1 className="text-gray-500">{size}MB</h1>
            </div>
          </div>
        </div>
        <button
          onClick={() => uninstallationHandler(id)}
          className="btn btn-success text-white font-bold"
        >
          Uninstall
        </button>
      </div>
    </>
  );
};

export default InstallCard;
