import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setForm((prev) => ({ 
    //   ...prev, 
    //   [name]: value 
    // }));
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === form.email)) {
      alert("User already exists!");
      return;
    }
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    setForm({
      name: "",
      email: "",
      password: ""
    });
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === form.email && u.password === form.password);
    if (!user) {
      alert("Invalid email or password!");
      return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/", { replace: true });
  };

  const handleClose = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 via-gray-500 to-gray-300  flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-xl shadow-2xl shadow-black border border-[#333] relative">

        {/* Close button inside the box */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-[#FF004F] transition"
          title="Close"
        >
          ×
        </button>

        {/* Logo */}
        <div className="text-center mb-6">
          <img src="Footer-logo.webp" alt="WROGN" className="h-14 mx-auto" />
          <h2 className="text-2xl font-bold text-white mt-0">
            {isLogin ? "Login to WROGN" : "Create your Account"}
          </h2>
        </div>

        <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent border border-[#444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F]"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-transparent border border-[#444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-transparent border border-[#444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#FF004F] hover:bg-[#e60045] text-white font-semibold py-2 rounded-lg transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-5 text-sm text-center text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#FF004F] font-semibold cursor-pointer hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
