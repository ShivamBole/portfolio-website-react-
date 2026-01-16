import { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/admin/verify",
        { password }
      );

      localStorage.setItem("adminToken", res.data.token);

      // 🔁 Reload so AdminGate re-checks token
      window.location.reload();
    } catch {
      setError("Invalid admin password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <form
        onSubmit={handleSubmit}
        className="p-8 border border-gray-700 rounded-lg w-[320px]"
      >
        <h2 className="h3 text-center mb-6">Admin Access</h2>

        <input
          type="password"
          placeholder="Enter admin password"
          className="w-full p-3 mb-4 rounded bg-black text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button type="submit" className="btn btn-sm w-full">
          {loading ? "Verifying..." : "Enter Dashboard"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
