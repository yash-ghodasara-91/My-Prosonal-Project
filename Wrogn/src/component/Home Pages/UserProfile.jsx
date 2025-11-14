import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  const handleClose = () => {
    navigate("/", {replace : true});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-500 to-gray-900 px-4">
      <div className="relative bg-gray-200 text-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold"
        >
          ×
        </button>

        {/* Profile Image */}
        <img
          src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=user"
          alt="Profile Avatar"
          className="w-24 h-24 mx-auto rounded-full border-4 border-[#FF004F] mb-4"
        />

        <h2 className="text-2xl font-bold mb-1">Welcome,</h2>

        {user ? (
          <>
            <p className="text-3xl font-semibold text-gray-800">{user.name}</p>
            <p className="text-xl text-gray-500 mb-6">{user.email}</p>

            <div className="text-left text-lg bg-gray-300 rounded-md p-4 mb-6">
              <p className="text-gray-600"><strong>Membership:</strong> Free User</p>
              <p className="text-gray-600"><strong>Status:</strong> Active</p>
            </div>

            <button
              onClick={handleLogout}
              className="bg-[#FF004F] hover:bg-[#e60045] text-white font-semibold w-full py-2 rounded-md transition"
            >
              Logout
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
