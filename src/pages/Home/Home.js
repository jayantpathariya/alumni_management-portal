import React from 'react';
import CreatePost from '../../components/CreatePost/CreatePost';
import CreateRoom from '../../components/CreateRoom/CreateRoom';
import FriendsSearch from '../../components/FriendsSearch/FriendsSearch';
import HeroImage from '../../components/HeroImage/HeroImage';
import Post from '../../components/Post/Post';
import Shortcut from '../../components/Shortcut/Shortcut';
import Story from '../../components/Story/Story';
import './home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <HeroImage />
      <Shortcut />
      <Story />
      <CreatePost />
      <div className="home-post-container">
        <div className="home-post-content">
          <CreateRoom />
          <Post />
        </div>
        <FriendsSearch />
      </div>
    </div>
  );
};

export default Home;
