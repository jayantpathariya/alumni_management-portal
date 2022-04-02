import React from 'react';
import './createPost.scss';
import { BiImages } from 'react-icons/bi';
import { AiFillTag } from 'react-icons/ai';
import { AiFillTrophy } from 'react-icons/ai';

const CreatePost = () => {
  return (
    <div className="create-post-container">
      <div className="create-post-content">
        <div className="input-container">
          <input type="text" placeholder="Create New Post" />
        </div>
        <hr />
        <div className="create-post-group">
          <div className="create-post-btn">
            <BiImages className="create-post-icon icon-1" />
            <div>Photo/Video</div>
          </div>

          <div className="create-post-btn">
            <AiFillTag className="create-post-icon icon-2" />
            <div>Tag People's</div>
          </div>

          <div className="create-post-btn">
            <AiFillTrophy className="create-post-icon icon-3" />
            <div>Event's Activities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
