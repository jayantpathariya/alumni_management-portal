import React from 'react';
import './createPost.scss';
import { BiImages } from 'react-icons/bi';
import { AiFillTag } from 'react-icons/ai';
import { AiFillTrophy } from 'react-icons/ai';
import { useFormik } from 'formik';
import { request } from '../../service/customAxios';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

const CreatePost = ({ getPostUpdated }) => {
  const { userDetails } = useSelector((state) => state.loginReducer);

  const createPost = async (values) => {
    try {
      const res = await request({
        method: 'POST',
        url: '/api/posts',
        data: values,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    description: '',
    image: '',
  };

  const validationSchema = Yup.object().shape({
    description: Yup.string().required('Description is required'),
    image: Yup.string(),
  });

  const onSubmit = (values) => {
    const data = {
      userId: userDetails?.user._id,
      description: values.description,
      image: values.image,
    };
    createPost(data);
    getPostUpdated(true);
    formik.handleReset();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="create-post-container">
      <form onSubmit={formik.handleSubmit} className="create-post-content">
        <div className="input-container">
          <input
            type="text"
            placeholder="Create New Post"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="post-options">
          <input
            type="text"
            placeholder="Image url"
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <button className="post-btn" type="submit">
            Post
          </button>
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
      </form>
    </div>
  );
};

export default CreatePost;
