import React, { useEffect, useState } from 'react';
import './friendsSearch.scss';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { request } from '../../service/customAxios';
import { useSelector } from 'react-redux';

const FriendsSearch = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const { userDetails } = useSelector((state) => state.loginReducer);

  const getUsers = async () => {
    try {
      const res = await request({
        url: 'api/users',
        method: 'GET',
      });
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const user = users.find((user) => user._id === userDetails.user._id);
    setCurrentUser(user);
  }, [users]);

  const handleFollow = async (userId) => {
    try {
      const res = await request({
        url: `api/users/${userId}/follow`,
        method: 'PUT',
        data: {
          userId: userDetails.user._id,
        },
      });
      console.log(res.data);
      if (res.data.status === 'success') {
        alert(res.data.message);
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfollow = async (userId) => {
    try {
      const res = await request({
        url: `api/users/${userId}/unfollow`,
        method: 'PUT',
        data: {
          userId: userDetails.user._id,
        },
      });
      console.log(res.data);
      if (res.data.status === 'success') {
        alert(res.data.message);
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="friend-container">
      <div className="friend-content">
        <div className="friend-header">
          <input type="text" placeholder="Search Contact" />
          <BsThreeDotsVertical className="icon" />
        </div>

        <div className="friend-list-container">
          {users.map((user, index) => {
            if (user._id !== userDetails.user._id) {
              return (
                <div key={index} className="friends-list">
                  <div className="friend-info">
                    <img src={user.profilePicture} alt={user.firstName} />
                    <div className="friend-name">
                      {user.firstName} {user.lastName}{' '}
                    </div>
                  </div>
                  {currentUser.followings.includes(user._id) ? (
                    <button
                      className="friend-add-btn"
                      onClick={() => handleUnfollow(user._id)}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className="friend-add-btn"
                      onClick={() => handleFollow(user._id)}
                    >
                      Follow
                    </button>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FriendsSearch;
