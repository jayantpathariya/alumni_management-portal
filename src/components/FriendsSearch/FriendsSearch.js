import React from 'react';
import './friendsSearch.scss';
import { BsThreeDotsVertical } from 'react-icons/bs';

const friendInfo = [
  {
    name: 'John Doe',
    image: 'https://www.thispersondoesnotexist.com/image',
  },
  {
    name: 'John Doe',
    image: 'https://www.thispersondoesnotexist.com/image',
  },
  {
    name: 'John Doe',
    image: 'https://www.thispersondoesnotexist.com/image',
  },
  {
    name: 'John Doe',
    image: 'https://www.thispersondoesnotexist.com/image',
  },
  {
    name: 'John Doe',
    image: 'https://www.thispersondoesnotexist.com/image',
  },
];

const FriendsSearch = () => {
  return (
    <div className="friend-container">
      <div className="friend-content">
        <div className="friend-header">
          <input type="text" placeholder="Search Contact" />
          <BsThreeDotsVertical className="icon" />
        </div>

        <div className="friend-list-container">
          {friendInfo.map((info, index) => {
            return (
              <div key={index} className="friends-list">
                <div className="friend-info">
                  <img src={info.image} alt={info.name} />
                  <div className="friend-name">{info.name}</div>
                </div>
                <button className="friend-add-btn">Add</button>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </div>
  );
};

export default FriendsSearch;
