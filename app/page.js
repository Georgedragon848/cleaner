"use client";
import { useState } from "react";

export default function Home() {
  const [reports, setReports] = useState([]);

  const addReport = () => {
    const newReport = {
      id: Date.now(),
      location: "Meerut",
      reward: 500,
      status: "Pending",
    };
    setReports([...reports, newReport]);
  };

  const acceptJob = (id) => {
    setReports(
      reports.map((r) =>
        r.id === id ? { ...r, status: "Accepted" } : r
      )
    );
  };

  const completeJob = (id) => {
    setReports(
      reports.map((r) =>
        r.id === id ? { ...r, status: "Completed" } : r
      )
    );
  };

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>CleanTrack MVP 🚀</h1>

      <button onClick={addReport}>📸 Report Trash</button>

      <h2>Reports</h2>

      {reports.length === 0 && <p>No reports yet</p>}

      {reports.map((r) => (
        <div key={r.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p>📍 {r.location}</p>
          <p>💰 ₹{r.reward}</p>
          <p>Status: {r.status}</p>

          {r.status === "Pending" && (
            <button onClick={() => acceptJob(r.id)}>Accept</button>
          )}

          {r.status === "Accepted" && (
            <button onClick={() => completeJob(r.id)}>Mark Completed</button>
          )}

          {r.status === "Completed" && <p>✅ Done</p>}
        </div>
      ))}
    </main>
  );
}
