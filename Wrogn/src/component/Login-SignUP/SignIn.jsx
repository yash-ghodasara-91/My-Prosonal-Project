import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = ({ setIsAuth }) => {
  const [formdata, setformData] = useState({ email: "", password: "" });
  const navigate = useNavigate();


  const handleChanges = (e) => {
    setformData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  }

  const handleSignin = (e) => {
    e.preventDefault();

    // Get registered users from localStorage
    let oldData = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email exists
    const singleUser = oldData.find((user) => user.email === formdata.email);

    if (!singleUser) {
      alert("User not found! Please register.");
      navigate("/");
      return;
    }

    // Check password match
    if (singleUser.password === formdata.password) {
      console.log("✅ Password matched");
      localStorage.setItem("auth", JSON.stringify(true));
      setIsAuth(true); 

      Swal.fire({
        title: 'Success',
        text: 'Login successful ✅',
        icon: 'success',
        timer: 2500,
        showConfirmButton: false
      }).then(() => {
        console.log("🚀 Navigating to /homepage");
        navigate("/homepage");
      });
    } else {
      console.log("❌ Wrong password");
      alert("Wrong password ❌");
    }

  };

  const handleClose = () => {
    navigate("/", { replace: true });
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 via-gray-500 to-gray-300 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-xl shadow-2xl shadow-black border border-[#333] relative">

        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-[#FF004F] transition"
          title="Close"
        >
          ×
        </button>

        {/* Logo / Heading */}
        <div className="text-center mb-6">
          <img src="Footer-logo.webp" alt="WROGN" className="h-14 mx-auto" />
          <h2 className="text-2xl font-bold text-white mt-0">Welcome Back</h2>
        </div>

        <form onSubmit={handleSignin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formdata.email}
            onChange={handleChanges}
            className="w-full px-4 py-2 bg-transparent border border-[#444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formdata.password}
            onChange={handleChanges}
            className="w-full px-4 py-2 bg-transparent border border-[#444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#FF004F] hover:bg-[#e60045] text-white font-semibold py-2 rounded-lg transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
