import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const PublicRoute = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (userDetails.token) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [userDetails.token]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default PublicRoute;
