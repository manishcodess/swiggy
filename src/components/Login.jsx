import { Link, useNavigate } from "react-router";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("swiggyUsers") || "[]");
    const match = users.find(
      (user) => user.email === form.email && user.password === form.password,
    );

    if (!match) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "swiggyCurrentUser",
      JSON.stringify({ name: match.name, email: match.email }),
    );
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-white to-orange-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-7 border border-orange-100">
        <h1 className="text-3xl font-bold text-orange-600">Welcome Back</h1>
        <p className="text-gray-500 mt-1 mb-6">Log in to continue ordering.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            className="w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />

          <input
            className="w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={onChange}
            required
          />

          {error ? <p className="text-sm text-red-500">{error}</p> : null}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-5 text-center">
          New here?{" "}
          <Link className="text-orange-600 font-semibold" to="/signup">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
