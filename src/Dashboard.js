import { useState } from "react";

export default function Dashboard() {
  const [calls, setCalls] = useState([]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Abbey Furlong – Career Dashboard</h1>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setCalls([...calls, "New call entry"])}>Add New Entry</button>
        {calls.length === 0 ? (
          <p style={{ color: "#888", fontSize: "0.9rem" }}>No calls or interviews logged yet.</p>
        ) : (
          <ul>
            {calls.map((call, i) => (
              <li key={i}>{call}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
