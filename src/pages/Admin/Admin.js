import React, { useEffect, useState } from 'react';
import './admin.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AdminCard from '../../components/AdminCard/AdminCard';
import AdminTable from '../../components/AdminTableStudent/AdminTableStudent';
import AdminTableAlumni from '../../components/AdminTableAlumni/AdminTableAlumni';
import Helmet from 'react-helmet';
import { deleteLogin } from '../../redux/actions/login';
import { useDispatch } from 'react-redux';
import { request } from '../../service/customAxios';

const Admin = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [usersCount, setUsersCount] = useState(0);
  const [alumniCount, setAlumniCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [postsCount, setPostsCount] = useState(0);

  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(deleteLogin());
    handleClose();
  };

  const getAllUsersCount = async () => {
    try {
      const res = await request({
        url: '/api/users/count/usersCount',
        method: 'GET',
      });
      setUsersCount(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAlumniCount = async () => {
    try {
      const res = await request({
        url: '/api/users/count/alumniCount',
        method: 'GET',
      });
      setAlumniCount(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStudentsCount = async () => {
    try {
      const res = await request({
        url: '/api/users/count/studentsCount/all',
        method: 'GET',
      });
      setStudentsCount(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPostCount = async () => {
    try {
      const res = await request({
        url: '/api/posts/count/postCount/all',
        method: 'GET',
      });
      setPostsCount(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersCount();
    getAlumniCount();
    getStudentsCount();
    getAllPostCount();
  }, []);

  console.log('usersCount', usersCount);

  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #f7f7f7; }'}</style>
      </Helmet>
      <div
        className="admin-container"
        style={{
          display: 'flex',
        }}
      >
        <div className="side-menu">
          <h2 className="side-title">AM Admin Panel</h2>
          <ul
            className="side-options"
            style={{
              listStyle: 'none',
              padding: '10px',
            }}
          >
            <li className="side-options-item">Dashboard</li>
            <li className="side-options-item">Manage Students</li>
            <li className="side-options-item">Manage Alumni</li>
            <li className="side-options-item">Total Students</li>
            <li className="side-options-item">Posts</li>
            <li className="side-options-item">Messages</li>
            <li className="side-options-item">Database</li>
            <li className="side-options-item">Settings</li>
          </ul>
        </div>
        <div
          style={{
            width: 'calc(100% - 230px)',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              position="static"
              style={{
                backgroundColor: '#fafafa',
              }}
            >
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  style={{
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: '1.5rem',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  Dashboard
                </Typography>

                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </Box>
          <div className="admin-content">
            <div className="admin-content-container">
              <AdminCard count={studentsCount} title="Total Students" />
              <AdminCard count={alumniCount} title="Total Alumni's" />
              <AdminCard count={postsCount} title="Total Post's" />
              <AdminCard count={usersCount} title="Total User's" />
            </div>
            <div className="table">
              <AdminTable />
              {/* <AdminTableAlumni /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
