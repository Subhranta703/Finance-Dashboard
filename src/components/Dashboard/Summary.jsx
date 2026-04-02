import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Summary() {
  const { transactions } = useContext(AppContext);

  const income = transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0);
  const balance = income - expense;

  const Card = ({ title, value, color }) => (
    <div className={`p-5 rounded-2xl shadow-lg bg-gradient-to-r ${color} hover:scale-105 transition`}>
      <h2 className="text-sm opacity-80">{title}</h2>
      <p className="text-2xl font-bold mt-1">₹{value}</p>
    </div>
  );

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Balance" value={balance} color="from-blue-500 to-indigo-600" />
      <Card title="Income" value={income} color="from-green-500 to-emerald-600" />
      <Card title="Expense" value={expense} color="from-red-500 to-pink-600" />
    </div>
  );
}