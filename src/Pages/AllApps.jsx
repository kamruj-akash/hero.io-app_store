import AppCard from "../Components/AppCard";
import Container from "../Components/Container";
import PageTitle from "../Components/PageTitle";
import useLoadAppData from "../Hooks/useLoadAppData";

const AllApps = () => {
  const [appData] = useLoadAppData();
  return (
    <Container>
      <PageTitle
        title={"Our All Applications"}
        subTitle={
          "Explore All Apps on the Market developed by us. We code for Millions"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-20">
        {appData.map((appData) => (
          <AppCard key={appData.id} appData={appData} />
        ))}
      </div>
    </Container>
  );
};

export default AllApps;
