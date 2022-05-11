import React, { useEffect } from 'react';
import './adminTableAlumni.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { request } from '../../service/customAxios';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

const AdminTableAlumni = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const [alumni, setAlumni] = React.useState([]);

  const getAlumni = async () => {
    try {
      const res = await request({
        url: 'api/users/isAlumni/users',
        method: 'GET',
      });

      setAlumni(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const approveUser = async (userId) => {
    try {
      const res = await request({
        url: `api/auth/approve/${userId}`,
        method: 'PUT',
        data: {
          userId: userDetails.user._id,
        },
      });
      alert(res.data.message);
      getAlumni();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectUser = async (userId) => {
    try {
      const res = await request({
        url: `api/auth/reject/${userId}`,
        method: 'PUT',
        data: {
          userId: userDetails.user._id,
        },
      });

      alert(res.data.message);

      getAlumni();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAlumni();
  }, []);

  return (
    <div className="admin-table-container">
      <div className="admin-table-header">
        <h3>Total Alumni's</h3>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head">Action</TableCell>
              <TableCell className="table-head">Name</TableCell>
              <TableCell className="table-head" align="center">
                Email
              </TableCell>
              <TableCell className="table-head" align="center">
                Contact
              </TableCell>
              <TableCell className="table-head" align="center">
                Branch
              </TableCell>
              <TableCell className="table-head" align="center">
                Company
              </TableCell>
              <TableCell className="table-head" align="center">
                DOB
              </TableCell>
              <TableCell className="table-head" align="center">
                Enroll No.
              </TableCell>
              <TableCell className="table-head" align="center">
                Type
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alumni.map((user, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div>
                      {user.isApproved ? (
                        <button onClick={() => rejectUser(user._id)}>
                          <CloseIcon
                            style={{
                              color: 'red',
                            }}
                          />
                        </button>
                      ) : (
                        <button
                          style={{
                            marginRight: '10px',
                          }}
                          onClick={() => approveUser(user._id)}
                        >
                          <CheckIcon
                            style={{
                              color: 'green',
                            }}
                          />
                        </button>
                      )}
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.firstName}
                  </TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.contactNo}</TableCell>
                  <TableCell align="center">{user.branch}</TableCell>
                  <TableCell align="center">{user.organization}</TableCell>
                  <TableCell align="center">{user.birthday}</TableCell>
                  <TableCell align="center">{user.enrollmentNo}</TableCell>
                  <TableCell align="center">{user.jobType}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminTableAlumni;
