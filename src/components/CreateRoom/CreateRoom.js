import React from 'react';
import './createRoom.scss';
import { BiDoorOpen } from 'react-icons/bi';

const personImages = [
  'https://www.thispersondoesnotexist.com/image',
  'https://www.thispersondoesnotexist.com/image',
  'https://www.thispersondoesnotexist.com/image',
  'https://www.thispersondoesnotexist.com/image',
  'https://www.thispersondoesnotexist.com/image',
  'https://www.thispersondoesnotexist.com/image',
  'https://www.thispersondoesnotexist.com/image',
];

const CreateRoom = () => {
  return (
    <div className="create-room-container">
      <div className="create-room-content">
        <button>
          <BiDoorOpen />
          Create Room
        </button>
        <div className="person-image-container">
          {personImages.map((image, index) => {
            return (
              <div key={index} className="person-image-grp">
                <img src={image} alt="person" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
