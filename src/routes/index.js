import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import AppRoute from './app';
import PublicRoute from './public';

const Routing = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);

  return (
    <BrowserRouter>
      {userDetails.token && <Header />}
      {userDetails.token ? <AppRoute /> : <PublicRoute />}
    </BrowserRouter>
  );
};

export default Routing;
