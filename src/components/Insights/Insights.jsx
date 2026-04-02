import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const highest = transactions.filter(t => t.type === "expense").sort((a, b) => b.amount - a.amount)[0];

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold mb-3">Insights</h2>
      {highest ? (
        <p className="text-red-400">
          Highest Expense: ₹{highest.amount} ({highest.category})
        </p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
