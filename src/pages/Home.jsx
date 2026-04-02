import Summary from "../components/Dashboard/Summary";
import Charts from "../components/Dashboard/Charts";
import Transactions from "../components/Transactions/Transactions";
import Insights from "../components/Insights/Insights";
import RoleSwitcher from "../components/UI/RoleSwitcher";

const Home = () => {
  return (
    <div className="space-y-6">
      <RoleSwitcher />
      <Summary />
      <Charts />
      <Transactions />
      <Insights />
    </div>
  );
};

export default Home;