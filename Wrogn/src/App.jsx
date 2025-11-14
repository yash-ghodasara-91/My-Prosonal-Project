import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import HomePage from './component/HomePage';
import Register from './component/Login-SignUP/Register';
import SignIn from './component/Login-SignUP/SignIn';
import AllProduct from './component/AllProduct';
import TestSidebarPage from './component/All Products/Pagesh/SidebarLayout';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const authValue = JSON.parse(localStorage.getItem("auth"));
    setIsAuth(authValue === true); // Make sure it's boolean true
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/signin" element={<SignIn setIsAuth={setIsAuth} />} />
        <Route path="/homepage" element={isAuth ? <HomePage /> : <Navigate to="/signin" />}/>
        <Route path="/all-products" element={<AllProduct />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
