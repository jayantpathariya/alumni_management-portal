import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../pages/Login/Login';

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
    </Routes>
  );
};

export default PublicRoute;
