import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginAction } from '../../../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (username, password) => {
    try {
      await dispatch(loginAction({ username, password }));
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.message);
    }
  };

  return { login, error };
}



// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { unwrapResult } from '@reduxjs/toolkit';
// import { login as loginAction } from '../../../redux/slice/authSlice';
// import { useNavigate } from 'react-router-dom';

// export function useLogin() {
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const login = async (username, password) => {
//     try {
//       await dispatch(loginAction({ username, password })).then(unwrapResult);
//       navigate('/');
//     } catch (rejectedValueOrSerializedError) {
//       console.error('Login failed:', rejectedValueOrSerializedError);
//       setError(rejectedValueOrSerializedError.message);
//     }
//   };

//   return { login, error };
// }





// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login as loginAction } from '../../../redux/slice/authSlice';
// import { useNavigate } from 'react-router-dom';

// export function useLogin() {
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const login = async (username, password) => {
//     try {
//       await dispatch(loginAction({ username, password }));
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error);
//       setError(error.message);
//     }
//   };

//   return { login, error };
// }



// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { AUTH_LOGIN } from '../redux/slice/authSlice';
// import { API, SetAuthToken } from './api';

// export function useLogin() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();

//   const login = async (username, password) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await API.post('/buyer/login', { username, password });
//       if (response.status === 200) {
//         SetAuthToken(response.data.token);
//         dispatch(AUTH_LOGIN(response.data));
//       } else {
//         throw new Error('Login failed');
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { login, loading, error };
// }





// import { useState } from "react";
// import { API } from "../../../libs/api";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { AUTH_LOGIN } from "../../../redux/sliceReducer";

// export default function useLogin() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//   });

//   function handleChange(event) {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value,
//     });
//   }

//   async function handleLogin() {
//     try {
//       const response = await API.post("/buyer/login", form);

//       if (response.status === 200) {
//         // Jika responsenya berhasil (status 200 OK), Anda dapat melakukan tindakan yang sesuai
//         dispatch(AUTH_LOGIN(response?.data));
//         navigate("/");
//       }

//       else if (response.status === 401) {
//         // Jika responsenya adalah "Unauthorized" (status 401), token mungkin hilang atau tidak valid
//         // Lakukan sesuatu di sini, misalnya, tampilkan pesan kesalahan
//         console.log("Unauthorized: Missing or invalid token");
//       }

//       else {
//         // Tindakan lain yang sesuai untuk kode tanggapan HTTP lainnya
//         console.log("HTTP Status Code:", response.status);
//       }
//     }

//     catch (error) {
//       // Menangani kesalahan jaringan atau kesalahan lainnya
//       console.log("Error:", error);
//     }
//   }

//   return { form, handleChange, handleLogin };
// }
