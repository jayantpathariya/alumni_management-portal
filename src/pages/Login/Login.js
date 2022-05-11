import './login.scss';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { request } from '../../service/customAxios';
import { useDispatch } from 'react-redux';
import { addLogin } from '../../redux/actions/login';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const login = async (values) => {
    try {
      const res = await request({
        method: 'POST',
        url: '/api/auth/login',
        data: values,
      });
      console.log(res);
      if (res.data.message) {
        alert(res.data.message);
      } else {
        if (res.data.user.isApproved) {
          dispatch(
            addLogin({
              user: res.data.user,
              token: res.data.token,
            })
          );
        } else {
          alert('Your account is not approved yet');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    login(data);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container-login">
      <form onSubmit={formik.handleSubmit}>
        <div className="sub-container">
          <h1 className="title">LOG IN TO YOUR ACCOUNT </h1>
          <div className="Fields">
            <div>
              <input
                className="username"
                type="text"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <input
                className="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />

              {formik.errors.password && formik.touched.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
          <button type="submit" className="button">
            Log In
          </button>
          <h5 className="login1" onClick={() => navigate('/register')}>
            Create an account
          </h5>
          <h5 className="login1">Can't Login ?</h5>
          <h5 className="login1" id="poli">
            Privacy & Policy
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
