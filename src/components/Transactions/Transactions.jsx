import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export default function Transactions() {
  const { transactions, role, addTransaction } = useContext(AppContext);
  const [filter, setFilter] = useState("all");

  const filtered = transactions.filter(t => filter === "all" ? true : t.type === filter);

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <select
          className="bg-gray-700 px-3 py-1 rounded"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {role === "admin" && (
        <button
          onClick={() => addTransaction({ date: "2026-04-04", amount: 1000, category: "Test", type: "income" })}
          className="mb-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
        >
          + Add Transaction
        </button>
      )}

      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400 border-b border-gray-600">
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id} className="border-b border-gray-700 hover:bg-gray-700 transition">
              <td>{t.date}</td>
              <td className={t.type === "income" ? "text-green-400" : "text-red-400"}>
                ₹{t.amount}
              </td>
              <td>{t.category}</td>
              <td className="capitalize">{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}