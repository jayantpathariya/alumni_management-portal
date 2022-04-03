import React from 'react';
import { images } from '../../assets';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { IoSchoolOutline } from 'react-icons/io5';
import { BiMessage } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import './header.scss';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  let activeStyle = {
    textDecoration: 'underline',
  };

  let activeClassName = 'underline';

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <img src={images.logo} alt="" />
        </div>
        <div className="icons">
          <NavLink
            to="/"
            className={(state) => {
              if (state.isActive) {
                return 'icon active-link';
              }
              return 'icon';
            }}
          >
            <AiOutlineHome
              style={{
                fontSize: '2.5rem',
              }}
            />
          </NavLink>
          <AiOutlineYoutube className="inactive-icon" />
          <IoSchoolOutline className="inactive-icon" />
          <NavLink
            to="/message"
            className={(state) => {
              if (state.isActive) {
                return 'icon active-link';
              }
              return 'icon';
            }}
          >
            <BiMessage
              style={{
                fontSize: '2.5rem',
              }}
            />
          </NavLink>
          <input type="text" placeholder="Search" />
          <CgProfile className="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
