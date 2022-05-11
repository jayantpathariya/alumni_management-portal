import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Admin from '../pages/Admin/Admin';

const AdminRoute = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const navigate = useNavigate();
  const admin = userDetails?.user?.isAdmin;

  useEffect(() => {
    if (userDetails.token && admin) {
      navigate('/admin');
    } else {
      navigate('/login');
    }
  }, [userDetails.token]);

  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AdminRoute;
