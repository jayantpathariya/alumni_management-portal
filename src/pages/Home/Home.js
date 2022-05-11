import React, { useState } from 'react';
import CreatePost from '../../components/CreatePost/CreatePost';
import CreateRoom from '../../components/CreateRoom/CreateRoom';
import FriendsSearch from '../../components/FriendsSearch/FriendsSearch';
import HeroImage from '../../components/HeroImage/HeroImage';
import Post from '../../components/Post/Post';
import Shortcut from '../../components/Shortcut/Shortcut';
import Story from '../../components/Story/Story';
import { Helmet } from 'react-helmet';
import './home.scss';

const Home = () => {
  const [isPostUpdated, setIsPostUpdated] = useState(false);

  const getPostUpdated = (value) => {
    setIsPostUpdated(value);
  };

  return (
    <div className="home-container">
      <Helmet>
        <style>{'body { background-color: #18191A; }'}</style>
      </Helmet>
      <HeroImage />
      <Shortcut />
      <Story />
      <CreatePost getPostUpdated={getPostUpdated} />
      <div className="home-post-container">
        <div className="home-post-content">
          <CreateRoom />
          <Post isPostUpdated={isPostUpdated} />
        </div>
        <FriendsSearch />
      </div>
    </div>
  );
};

export default Home;
