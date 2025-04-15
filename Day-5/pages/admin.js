import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import "../styles/admin.css"; // Import the CSS file

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    async function fetchSubmissions() {
      const { data, error } = await supabase.from("answers").select("*");
      if (error) console.error("Error fetching submissions:", error);
      else setSubmissions(data);
    }

    fetchSubmissions();
  }, []);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      {submissions.length > 0 ? (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Question</th>
              <th>Answer</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.category}</td>
                <td>{entry.question}</td>
                <td>{entry.answer}</td>
                <td>{new Date(entry.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No submissions yet.</p>
      )}
    </div>
  );
}
