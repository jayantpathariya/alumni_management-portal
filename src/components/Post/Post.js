import React from 'react';
import './post.scss';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';

const Post = () => {
  return (
    <div className="post-container">
      <div className="post-content">
        <div className="post-header">
          <img
            src={'https://www.thispersondoesnotexist.com/image'}
            alt="user"
          />

          <div className="post-content-information">
            <div className="post-info">
              <div className="post-info-personal">
                <div className="post-info-content-name">John Doe</div>
                <div className="post-info-content-time">2 hours ago Bhopal</div>
              </div>
              <BsThreeDotsVertical className="icon" />
            </div>
            <hr />
            <div className="post-img-section">
              <img
                className="post-img"
                src={
                  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                }
                alt="post"
              />
            </div>
          </div>
        </div>
        <div className="post-comment">
          <div className="post-like">
            <AiFillLike className="icon" />
            <div>23</div>
          </div>
          <input type="text" placeholder="Comment" />
          <button>
            <FaShare className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
