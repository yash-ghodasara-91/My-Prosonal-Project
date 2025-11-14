import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const [formdata, setformData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setForm((prev) => ({ 
        //   ...prev, 
        //   [name]: value 
        // }));
        setformData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    };


    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = { id: Date.now(), ...formdata };
        const oldUsers = JSON.parse(localStorage.getItem("users")) || [];

        const isEmailUsed = oldUsers.find((u) => u.email === newUser.email);
        if (isEmailUsed) {
            alert("Email already registered!");
            return;
        }

        localStorage.setItem("users", JSON.stringify([...oldUsers, newUser]));
        navigate("/signin");
        Swal.fire({
            title: 'success',
            text: 'Registration successful!',
            icon: 'success',

        })
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
                    <h2 className="text-2xl font-bold text-white mt-0">Create your Account</h2>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formdata.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-transparent border border-[#444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F]"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formdata.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-transparent border border-[#444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F]"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formdata.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-transparent border border-[#444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F]"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#FF004F] hover:bg-[#e60045] text-white font-semibold py-2 rounded-lg transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
