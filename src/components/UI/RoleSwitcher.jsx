import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function RoleSwitcher() {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">
        Role:{" "}
        <span className={role === "admin" ? "text-blue-400" : "text-gray-400"}>
          {role.toUpperCase()}
        </span>
      </h2>

      <select
        className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}