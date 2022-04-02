import React from 'react';
import { images } from '../../assets';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { IoSchoolOutline } from 'react-icons/io5';
import { BiMessage } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <img src={images.logo} alt="" />
        </div>
        <div className="icons">
          <AiOutlineHome className="icon active-link" />
          <AiOutlineYoutube className="icon" />
          <IoSchoolOutline className="icon" />
          <BiMessage className="icon" />
          <input type="text" placeholder="Search" />
          <CgProfile className="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
