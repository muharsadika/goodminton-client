import { useDispatch, useSelector } from 'react-redux';
import { login as loginAction } from '../../../redux/slice/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (username, password) => {
    const resultAction = await dispatch(loginAction({ username, password }));

    if (loginAction.rejected.match(resultAction)) {
      toast.error(resultAction.payload);
    } else {
      toast.success('Login successful!');
      navigate('/');
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  }

  return {
    handleLogin,
    onSubmit,
    username,
    setUsername,
    password,
    setPassword,
    status,
    error
  };
}

export default useLogin;



// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login as loginAction } from '../../../redux/slice/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export function useLogin() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   // const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const login = async (username, password) => {
//     try {
//       const resultAction = await dispatch(loginAction({ username, password }));
//       if (loginAction.fulfilled.match(resultAction)) {
//         navigate('/');
//         toast.success('Login successful!');
//       } else {
//         throw new Error(resultAction.error.message);
//       }
//       // toast.success('Login successful!');
//       // navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error);
//       // setError(error.message);
//       toast.error(error.message || 'username or password is incorrect');
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await login(username, password);
//     } catch (error) {
//       console.error('Login failed:', error);
//       toast.error('Login failed!');
//     }
//   };

//   return {
//     login,
//     // error,
//     handleSubmit,
//     username,
//     setUsername,
//     password,
//     setPassword
//   };
// }
