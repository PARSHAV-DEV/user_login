import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../api";

export default function Profile() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");

  // Load profile
  useEffect(() => {
    axios
      .get(`${API_BASE}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => setUser(res.data))
      .catch(() => setMessage("Unauthorized"));
  }, []);

  const update = async () => {
    try {
      await axios.put(
        `${API_BASE}/users/profile`,
        user,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Updated Successfully");
    } catch {
      setMessage("Error updating");
    }
  };

  return (
    <div className="col-md-6 mx-auto">
      <h2>My Account</h2>
      {message && <div className="alert alert-info">{message}</div>}

      <input
        className="form-control mb-3"
        value={user.name || ""}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <input className="form-control mb-3" value={user.email} disabled />

      <input
        className="form-control mb-3"
        type="password"
        placeholder="New Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button className="btn btn-primary w-100" onClick={update}>
        Save Changes
      </button>
    </div>
  );
}
