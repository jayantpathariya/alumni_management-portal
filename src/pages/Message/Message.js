import React from 'react';
import CreateRoom from '../../components/CreateRoom/CreateRoom';
import FriendsSearch from '../../components/FriendsSearch/FriendsSearch';
import MessageList from '../../components/MessageList/MessageList';
import Post from '../../components/Post/Post';
import Shortcut from '../../components/Shortcut/Shortcut';
import Story from '../../components/Story/Story';
import './message.scss';

const Message = () => {
  return (
    <div className="message-container">
      <Shortcut />
      <Story />
      <div className="message-post-container">
        <div className="message-post-content">
          <CreateRoom />
          <MessageList />
        </div>
        <FriendsSearch />
      </div>
    </div>
  );
};

export default Message;
