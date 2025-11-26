import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/users/register`, form);
      setMessage("Registration Successful!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="col-md-5 mx-auto">
      <h2 className="mb-3">Create Account</h2>

      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={submit}>
        <input
          className="form-control mb-3"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

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

        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}
