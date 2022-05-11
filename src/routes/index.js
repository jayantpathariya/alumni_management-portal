import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import AppRoute from './app';
import PublicRoute from './public';
import AdminRoute from './admin';

const Routing = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const admin = userDetails?.user?.isAdmin;

  return (
    <BrowserRouter>
      {userDetails.token && admin ? (
        <>
          <AdminRoute />
        </>
      ) : userDetails.token ? (
        <>
          <Header />
          <AppRoute />
        </>
      ) : (
        <>
          <PublicRoute />
        </>
      )}
    </BrowserRouter>
  );
};

export default Routing;
