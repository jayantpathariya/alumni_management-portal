import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import Message from '../pages/Message/Message';

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
