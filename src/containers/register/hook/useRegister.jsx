import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { register as registerAction } from '../../../redux/slice/authSlice';

export function useRegister() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const register = async (fullname, email, username, password) => {
    try {
      await dispatch(registerAction({ fullname, email, username, password })).then(unwrapResult);
      navigate('/login');
    } catch (rejectedValueOrSerializedError) {
      console.error('Registration failed:', rejectedValueOrSerializedError);
      setError(rejectedValueOrSerializedError.message);
    }
  };

  return { register, error };
}




// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { register as registerAction } from '../../../redux/slice/authSlice';

// export function useRegister() {
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const register = async (fullname, email, username, password) => {
//     try {
//       await dispatch(registerAction({ fullname, email, username, password }));
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       setError(error.message);
//     }
//   };

//   return { register, error };
// }
