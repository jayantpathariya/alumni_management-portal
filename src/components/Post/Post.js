import React, { useEffect, useState } from 'react';
import './post.scss';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import { request } from '../../service/customAxios';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Post = ({ isPostUpdated }) => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const [posts, setPosts] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchPosts = async () => {
    try {
      const res = await request({
        method: 'GET',
        url: `api/posts/timeline/${userDetails.user._id}`,
      });

      // sort posts by date created
      const sortedPosts = res.data.sort((a, b) => {
        return moment(b.createdAt).diff(moment(a.createdAt));
      });
      setPosts(sortedPosts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [isPostUpdated]);

  const handleLike = async (postId) => {
    try {
      const res = await request({
        method: 'PUT',
        url: `api/posts/${postId}/like`,
        data: {
          userId: userDetails.user._id,
        },
      });
      console.log('res', res?.data?.message);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const res = await request({
        method: 'DELETE',
        url: `/api/posts/${postId}`,
        data: {
          userId: userDetails?.user._id,
        },
      });
      handleClose();
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return posts?.map((post, index) => (
    <div key={index} className="post-container">
      <div className="post-content">
        <div className="post-header">
          <img src={post.user.profilePicture} alt="user" />

          <div className="post-content-information">
            <div className="post-info">
              <div className="post-info-personal">
                <div className="post-info-content-name">{`${post.user.firstName} ${post.user.lastName}`}</div>
                <div className="post-info-content-time">
                  {moment(post.createdAt).fromNow()}
                </div>
              </div>
              {userDetails.user._id === post.userId && (
                <div>
                  <BsThreeDotsVertical className="icon" onClick={handleClick} />
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
                      <MenuItem onClick={() => deletePost(post._id)}>
                        Delete
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              )}
            </div>

            <hr />
            {post.description && (
              <div className="post-desc-section">
                <div className="post-description">{post.description}</div>
              </div>
            )}
            <div className="post-img-section">
              {post.image && (
                <img className="post-img" src={post.image} alt="post" />
              )}
            </div>
          </div>
        </div>
        <div className="post-comment">
          <div className="post-like">
            <AiFillLike className="icon" onClick={() => handleLike(post._id)} />
            <div>{post.likes.length}</div>
          </div>
          <input type="text" placeholder="Comment" />
          <button>
            <FaShare className="icon" />
          </button>
        </div>
      </div>
    </div>
  ));
};

export default Post;
