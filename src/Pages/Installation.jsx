import { useEffect, useState } from "react";
import Container from "../Components/Container";
import InstallCard from "../Components/InstallCard";
import Loader from "../Components/Loader";
import PageTitle from "../Components/PageTitle";
import useLoadAppData from "../Hooks/useLoadAppData";
import { getDataFromLs } from "../utilities/LocalStorage";

const Installation = () => {
  const [appData, loader] = useLoadAppData();
  const [installedApp, setInstalledApp] = useState([]);
  useEffect(() => {
    const storedData = getDataFromLs();
    const filteredData = appData?.filter((data) =>
      storedData.includes(data.id)
    );
    setInstalledApp(filteredData);
  }, [appData]);

  // sorted
  const [sort, setSort] = useState("none");
  const sortHandler = (() => {
    if (sort === "down-dsc") {
      return [...installedApp].sort((a, b) => a.downloads - b.downloads);
    } else if (sort === "down-asc") {
      return [...installedApp].sort((a, b) => b.downloads - a.downloads);
    } else if (sort === "size-asc") {
      return [...installedApp].sort((a, b) => b.size - a.size);
    } else if (sort === "rev-asc") {
      return [...installedApp].sort((a, b) => b.reviews - a.reviews);
    } else {
      return installedApp;
    }
  })();

  //   reviews
  // downloads

  return (
    <Container>
      <PageTitle
        title={"Your Installed Apps"}
        subTitle={"Explore All Trending Apps on the Market developed by us"}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-semibold text-[#001931] text-2xl">
            {installedApp.length} Apps Found
          </h1>
          <div className="border py-2 px-3 rounded-lg border-[#D2D2D2] text-[#4a4a4a]">
            <select
              defaultValue={installedApp}
              onChange={(e) => setSort(e.target.value)}
              name="sortsOptions"
            >
              <option value="none">Sort By</option>
              <option value="down-asc">Download (High-Low)</option>
              <option value="down-dsc">Download (Low-High)</option>
              <option value="size-asc">Sort By App Size</option>
              <option value="rev-asc">Best Reviewed</option>
            </select>
          </div>
        </div>
        <div>
          {loader ? (
            <Loader />
          ) : (
            sortHandler.map((app) => (
              <InstallCard
                key={app.id}
                appData={app}
                installedApp={installedApp}
                setInstalledApp={setInstalledApp}
              />
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default Installation;
