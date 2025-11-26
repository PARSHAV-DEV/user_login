import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE}/users/login`, form);

      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (err) {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="col-md-5 mx-auto">
      <h2 className="mb-3">Login</h2>

      {message && <div className="alert alert-danger">{message}</div>}

      <form onSubmit={submit}>
        <input
          className="form-control mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
