import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import Summary from "../components/Dashboard/Summary";
import Charts from "../components/Dashboard/Charts";
import Transactions from "../components/Transactions/Transactions";
import Insights from "../components/Insights/Insights";
import RoleSwitcher from "../components/UI/RoleSwitcher";

const Home = () => {
  const { role, loading } = useContext(AppContext);

  // Loading state (for mock API)
  if (loading) {
    return (
      <div className="text-center text-lg mt-10">
        ⏳ Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* 🔐 ROLE BANNER (VERY IMPORTANT) */}
      <div
        className={`p-4 rounded-xl text-center font-medium shadow ${
          role === "admin"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-200"
        }`}
      >
        {role === "admin"
          ? "🛠 Admin Mode: You can manage transactions"
          : "👁 Viewer Mode: Read-only access"}
      </div>

      {/* 🔘 Role Switcher */}
      <RoleSwitcher />

      {/* 📊 Summary Cards */}
      <Summary />

      {/* 📈 Charts + Insights side by side */}
      <div className="grid md:grid-cols-2 gap-6">
        <Charts />
        <Insights />
      </div>

      {/* 📋 Transactions */}
      <Transactions />
    </div>
  );
};

export default Home;