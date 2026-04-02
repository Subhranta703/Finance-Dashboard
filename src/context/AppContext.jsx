import { createContext, useState } from "react";
import { transactions as initialData } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");

  const addTransaction = (t) => {
    setTransactions([...transactions, { ...t, id: Date.now() }]);
  };

  return (
    <AppContext.Provider
      value={{ transactions, setTransactions, role, setRole, addTransaction }}
    >
      {children}
    </AppContext.Provider>
  );
};