import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AppCard from "../Components/AppCard";
import Container from "../Components/Container";
import PageTitle from "../Components/PageTitle";
import useLoadAppData from "../Hooks/useLoadAppData";

const AllApps = () => {
  const [appData] = useLoadAppData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = appData.filter((item) =>
    item.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <Container>
      <PageTitle
        title={"Our All Applications"}
        subTitle={
          "Explore All Apps on the Market developed by us. We code for Millions"
        }
      />

      {/* all apps & search app */}
      <div className="mb-5 flex flex-col gap-5 justify-between items-center md:flex-row">
        <h1 className="font-semibold text-2xl text-[#001931]">
          ({filteredData.length}) Apps Found
        </h1>
        <div className="flex border ps-4 rounded-md border-[#D2D2D2] items-center justify-center min-w-[400px]  text-[#627382]">
          <FaSearch />
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full min-h-[44px] ps-2"
            type="text"
            name="search"
            placeholder="Search App"
          />
        </div>
      </div>

      {/* map all app */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-20">
        {filteredData.map((appData) => (
          <AppCard key={appData.id} appData={appData} />
        ))}
      </div>
    </Container>
  );
};

export default AllApps;
