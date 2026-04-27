import { Link, useNavigate } from "react-router";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("swiggyUsers") || "[]");
    const alreadyExists = users.some((user) => user.email === form.email);

    if (alreadyExists) {
      setError("This email is already registered.");
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    localStorage.setItem("swiggyUsers", JSON.stringify([...users, newUser]));
    localStorage.setItem(
      "swiggyCurrentUser",
      JSON.stringify({ name: newUser.name, email: newUser.email }),
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-white to-orange-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-7 border border-orange-100">
        <h1 className="text-3xl font-bold text-orange-600">Create Account</h1>
        <p className="text-gray-500 mt-1 mb-6">
          Join and start your food journey.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            className="w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={onChange}
            required
          />

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

          <input
            className="w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={onChange}
            required
          />

          {error ? <p className="text-sm text-red-500">{error}</p> : null}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-5 text-center">
          Already have an account?{" "}
          <Link className="text-orange-600 font-semibold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
