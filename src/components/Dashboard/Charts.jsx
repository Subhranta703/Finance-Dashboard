import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Charts() {
  const { transactions } = useContext(AppContext);

  const data = [
    { name: "Income", value: transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0) },
    { name: "Expense", value: transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0) }
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="mb-4 text-lg font-semibold">Spending Overview</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100}>
          <Cell fill="#22c55e" />
          <Cell fill="#ef4444" />
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
