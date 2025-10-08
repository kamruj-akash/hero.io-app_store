import { BiStar } from "react-icons/bi";
import { FaArrowDown, FaDownload } from "react-icons/fa6";
import Container from "../Components/Container";
import PageTitle from "../Components/PageTitle";

const Installation = () => {
  return (
    <Container>
      <PageTitle
        title={"Your Installed Apps"}
        subTitle={"Explore All Trending Apps on the Market developed by us"}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-semibold text-[#001931] text-2xl">
            1 Apps Found
          </h1>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size <FaArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex  items-center justify-between p-5 bg-white rounded-2xl">
            <div className="flex gap-8 items-center">
              <div className="w-20 h-20 rounded-xl bg-gray-400">
                <img src="" alt="" />
              </div>
              <div>
                <h1 className="font-medium text-xl text-[#001931] mb-1">
                  Forest: Focus for Productivity
                </h1>
                <div className="flex gap-5 items-center">
                  <div className="flex gap-1 items-center text-green-500">
                    <FaDownload /> 5M
                  </div>
                  <div className="flex gap-1 items-center text-orange-500">
                    <BiStar /> 5
                  </div>
                  <h1 className="text-gray-500">250MB</h1>
                </div>
              </div>
            </div>
            <button className="btn btn-success text-white font-bold">
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Installation;
