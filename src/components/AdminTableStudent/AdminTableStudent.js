import React, { useEffect, useState } from 'react';
import './adminTableStudent.scss';
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

const AdminTable = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const res = await request({
        url: '/api/users/isStudent/users',
        method: 'GET',
      });
      setStudents(res.data);
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
      getStudents();
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

      getStudents();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  console.log('students', students);

  return (
    <div className="admin-table-container">
      <div className="admin-table-header">
        <h3>Total Students</h3>
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
                Year
              </TableCell>
              <TableCell className="table-head" align="center">
                DOB
              </TableCell>
              <TableCell className="table-head" align="center">
                Enroll No.
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">
                    <div>
                      {student.isApproved ? (
                        <button onClick={() => rejectUser(student._id)}>
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
                          onClick={() => approveUser(student._id)}
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
                    {student.firstName}
                  </TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">{student.contactNo}</TableCell>
                  <TableCell align="center">{student.branch}</TableCell>
                  <TableCell align="center">{student.year}</TableCell>
                  <TableCell align="center">{student.birthday}</TableCell>
                  <TableCell align="center">{student.enrollmentNo}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminTable;
