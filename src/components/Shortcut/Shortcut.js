import React from 'react';
import './shortcut.scss';
import { FaUsers } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';

const Shortcut = () => {
  return (
    <div className="shortcut-container">
      <div className="shortcut-content">
        <div className="shortcut-icons">
          <div className="icon-container">
            <FaUsers className="shortcut-icon icon-0" />
            <div className="icon-text">GROUPS</div>
          </div>

          <div className="icon-container">
            <FaUserFriends className="shortcut-icon icon-1" />
            <div className="icon-text">FRIEND'S</div>
          </div>

          <div className="icon-container">
            <FaBell className="shortcut-icon icon-2" />
            <div className="icon-text">NOTIFICATION</div>
          </div>

          <div className="icon-container">
            <FaTrophy className="shortcut-icon icon-3" />
            <div className="icon-text">EVENTS</div>
          </div>

          <div className="icon-container">
            <FaMapMarkerAlt className="shortcut-icon icon-4" />
            <div className="icon-text"> JOBS</div>
          </div>

          <div className="icon-container">
            <FaBookmark className="shortcut-icon icon-5" />
            <div className="icon-text">FAVORITE</div>
          </div>
        </div>
        <button className="shortcut-btn">Add Shortcut</button>
      </div>
    </div>
  );
};

export default Shortcut;
