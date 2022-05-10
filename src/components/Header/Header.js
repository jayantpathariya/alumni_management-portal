import React from 'react';
import { images } from '../../assets';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { IoSchoolOutline } from 'react-icons/io5';
import { BiMessage } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { deleteLogin } from '../../redux/actions/login';

const Header = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(deleteLogin());
    handleClose();
  };

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

          {userDetails.user ? (
            <div className="userProfile">
              <img
                src={userDetails.user.profilePicture}
                alt="profile"
                className="user-img"
                onClick={handleClick}
              />
              <div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          ) : (
            <CgProfile className="profile" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
