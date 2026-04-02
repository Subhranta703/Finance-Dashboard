import { useEffect } from "react";
import Dashboard from "./pages/Home";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark"); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Dashboard />
    </div>
  );
}

export default App;