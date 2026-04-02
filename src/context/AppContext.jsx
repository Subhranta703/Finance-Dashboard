import { createContext, useState, useEffect } from "react";
import { transactions as initialData } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [role, setRole] = useState("viewer");
  const [loading, setLoading] = useState(true);

  // Simulated API call
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const saved = localStorage.getItem("transactions");

      if (saved) {
        setTransactions(JSON.parse(saved));
      } else {
        setTransactions(initialData);
      }

      setLoading(false);
    }, 1000); // simulate delay
  }, []);

  // Persist data
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions, loading]);

  const addTransaction = (t) => {
    setTransactions((prev) => [...prev, { ...t, id: Date.now() }]);
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        role,
        setRole,
        addTransaction,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
