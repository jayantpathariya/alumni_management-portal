import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Message from '../pages/Message/Message';

const AppRoute = () => {
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
      <Route index element={<Home />} />
      <Route path="message" element={<Message />} />
    </Routes>
  );
};

export default AppRoute;
