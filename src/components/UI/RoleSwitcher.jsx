import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function RoleSwitcher() {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="flex justify-end">
      <select
        className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 hover:border-blue-400 transition"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}