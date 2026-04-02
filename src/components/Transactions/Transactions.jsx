import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";

export default function Transactions() {
  const { transactions, role, addTransaction } = useContext(AppContext);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Filtering + Search
  const filtered = transactions.filter(
    (t) =>
      (filter === "all" || t.type === filter) &&
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  // Export CSV
  const exportCSV = () => {
    const csv = [
      "Date,Amount,Category,Type",
      ...transactions.map(
        (t) => `${t.date},${t.amount},${t.category},${t.type}`
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 p-6 rounded-2xl shadow-lg"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-4">
        <h2 className="text-lg font-semibold">Transactions</h2>

        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Search category..."
            className="bg-gray-700 px-3 py-1 rounded text-sm"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="bg-gray-700 px-3 py-1 rounded text-sm"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button
            onClick={exportCSV}
            className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* Admin Button */}
     {role === "admin" && (
  <div className="flex gap-2 mb-4">
    <button
      onClick={() =>
        addTransaction({
          date: new Date().toISOString().split("T")[0],
          amount: Math.floor(Math.random() * 5000),
          category: "Admin Added",
          type: "income",
        })
      }
      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
    >
      + Add Transaction
    </button>

    <button
      onClick={() => alert("Edit feature coming")}
      className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg"
    >
      Edit Mode
    </button>
  </div>
)}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-600">
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Category</th>
              <th className="text-left py-2">Type</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-gray-700 hover:bg-gray-700 transition"
                >
                  <td className="py-2">{t.date}</td>
                  <td
                    className={`py-2 ${
                      t.type === "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    ₹{t.amount}
                  </td>
                  <td className="py-2">{t.category}</td>
                  <td className="py-2 capitalize">{t.type}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-400">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}