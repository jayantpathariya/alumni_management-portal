import React from 'react';
import './register.scss';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { request } from '../../service/customAxios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    contactNo: '',
    userType: 'std',
    password: '',
    joiningYear: '',
    graduatingYear: '',
    organization: '',
    location: '',
    birthday: '',
    course: '',
    branch: '',
    enrollmentNo: '',
    year: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    joiningYear: Yup.date().required('Joining year is required'),
    userType: Yup.string().required('User type is required'),
    contactNo: Yup.string().required('Contact no is required'),
    graduatingYear: Yup.date().when('userType', {
      is: 'alm',
      then: Yup.date().required('Graduating year is required'),
      otherwise: Yup.date(),
    }),
    organization: Yup.string().when('userType', {
      is: 'alm',
      then: Yup.string().required('Organization is required'),
      otherwise: Yup.string(),
    }),
    location: Yup.string().when('userType', {
      is: 'alm',
      then: Yup.string().required('Location is required'),
      otherwise: Yup.string(),
    }),
    birthday: Yup.date().required('Birthday is required'),
    course: Yup.string().required('Course is required'),
    branch: Yup.string().required('Branch is required'),
    enrollmentNo: Yup.string().required('Enrollment no is required'),
    year: Yup.string().when('userType', {
      is: 'std',
      then: Yup.string().required('Year is required'),
      otherwise: Yup.string(),
    }),
  });

  const register = async (values) => {
    try {
      const res = await request({
        method: 'POST',
        url: '/api/auth/register',
        data: values,
      });

      if (res.data.status === 'success') {
        alert('account created successfully');
        navigate('/login');
      } else {
        alert('Registration failed');
      }
      formik.handleReset();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (values) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      email: values.email,
      contactNo: values.contactNo,
      isAlumni: values.userType === 'std' ? false : true,
      password: values.password,
      joiningYear: values.joiningYear,
      graduatingYear: values.graduatingYear,
      organization: values.organization,
      location: values.location,
      birthday: values.birthday,
      course: values.course,
      branch: values.branch,
      enrollmentNo: values.enrollmentNo,
      year: values.year,
    };
    register(data);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="register-container">
      <div className="reg-content">
        <h1 className="reg-title">Register</h1>
        <form className="reg-form" onSubmit={formik.handleSubmit}>
          <Box
            sx={{ minWidth: 120 }}
            className="input-wrapper"
            style={{
              backgroundColor: '#fafafa',
            }}
          >
            <FormControl fullWidth>
              <Select
                defaultValue="std"
                className="reg-input"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="userType"
                value={formik.values.userType}
                onChange={formik.handleChange}
              >
                <MenuItem value="std">Student</MenuItem>
                <MenuItem value="alm">Alumni</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div className="input-wrapper">
            <label className="input-label">Firstname</label>
            <input
              className="reg-input"
              type="text"
              placeholder="Firstname"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error-msg">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="input-wrapper">
            <label className="input-label">Lastname</label>
            <input
              className="reg-input"
              type="text"
              placeholder="Lastname"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error-msg">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div className="input-wrapper">
            <label className="input-label">Username</label>
            <input
              className="reg-input"
              type="text"
              placeholder="Username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error-msg">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="input-wrapper">
            <label className="input-label">Email</label>
            <input
              className="reg-input"
              type="text"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-msg">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="input-wrapper">
            <label className="input-label">Contact No</label>
            <input
              className="reg-input"
              type="text"
              placeholder="Contact No"
              name="contactNo"
              value={formik.values.contactNo}
              onChange={formik.handleChange}
            />
            {formik.touched.contactNo && formik.errors.contactNo ? (
              <div className="error-msg">{formik.errors.contactNo}</div>
            ) : null}
          </div>
          <div className="input-wrapper">
            <label className="input-label">Password</label>
            <input
              className="reg-input"
              type="text"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-msg">{formik.errors.password}</div>
            ) : null}
          </div>
          {formik.values.userType === 'alm' && (
            <div className="input-wrapper">
              <label className="input-label">Organization</label>
              <input
                className="reg-input"
                type="text"
                placeholder="Organization"
                name="organization"
                value={formik.values.organization}
                onChange={formik.handleChange}
              />
              {formik.touched.organization && formik.errors.organization ? (
                <div className="error-msg">{formik.errors.organization}</div>
              ) : null}
            </div>
          )}
          {formik.values.userType === 'alm' && (
            <div className="input-wrapper">
              <label className="input-label">Location</label>
              <input
                className="reg-input"
                type="text"
                placeholder="Location"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
              {formik.touched.location && formik.errors.location ? (
                <div className="error-msg">{formik.errors.location}</div>
              ) : null}
            </div>
          )}
          <div className="input-wrapper">
            <label className="input-label">Birthday</label>
            <input
              className="reg-input"
              type="date"
              placeholder="Birthday"
              name="birthday"
              value={formik.values.birthday}
              onChange={formik.handleChange}
            />
            {formik.touched.birthday && formik.errors.birthday ? (
              <div className="error-msg">{formik.errors.birthday}</div>
            ) : null}
          </div>
          <div className="input-wrapper">
            <label className="input-label">Joining Year</label>
            <input
              className="reg-input"
              type="date"
              placeholder="Joining Year"
              name="joiningYear"
              value={formik.values.joiningYear}
              onChange={formik.handleChange}
            />
            {formik.touched.joiningYear && formik.errors.joiningYear ? (
              <div className="error-msg">{formik.errors.joiningYear}</div>
            ) : null}
          </div>
          {formik.values.userType === 'alm' && (
            <div className="input-wrapper">
              <label className="input-label">Graduate Year</label>
              <input
                className="reg-input"
                type="date"
                placeholder="Graduating Year"
                name="graduatingYear"
                value={formik.values.graduatingYear}
                onChange={formik.handleChange}
              />
              {formik.touched.graduatingYear && formik.errors.graduatingYear ? (
                <div className="error-msg">{formik.errors.graduatingYear}</div>
              ) : null}
            </div>
          )}
          <div className="input-wrapper">
            <label className="input-label">Course</label>
            <input
              className="reg-input"
              type="text"
              placeholder="Course"
              name="course"
              value={formik.values.course}
              onChange={formik.handleChange}
            />
            {formik.touched.course && formik.errors.course ? (
              <div className="error-msg">{formik.errors.course}</div>
            ) : null}
          </div>
          <div className="input-wrapper">
            <label className="input-label">Branch</label>
            <input
              className="reg-input"
              type="text"
              placeholder="Branch"
              name="branch"
              value={formik.values.branch}
              onChange={formik.handleChange}
            />
            {formik.touched.branch && formik.errors.branch ? (
              <div className="error-msg">{formik.errors.branch}</div>
            ) : null}
          </div>
          <div className="input-wrapper">
            <label className="input-label">Enrollment No</label>
            <input
              className="reg-input"
              type="text"
              placeholder="Enrollment No"
              name="enrollmentNo"
              value={formik.values.enrollmentNo}
              onChange={formik.handleChange}
            />
            {formik.touched.enrollmentNo && formik.errors.enrollmentNo ? (
              <div className="error-msg">{formik.errors.enrollmentNo}</div>
            ) : null}
          </div>
          {formik.values.userType === 'std' && (
            <div className="input-wrapper">
              <label className="input-label">Year</label>
              <input
                className="reg-input"
                type="text"
                placeholder="Year"
                name="year"
                value={formik.values.year}
                onChange={formik.handleChange}
              />
              {formik.touched.year && formik.errors.year ? (
                <div className="error-msg">{formik.errors.year}</div>
              ) : null}
            </div>
          )}
          <button type="submit" className="reg-btn">
            Register
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="reg-btn"
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
