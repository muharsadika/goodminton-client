import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { register as registerAction } from '../../../redux/slice/authSlice';

export function useRegister() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const register = async (fullname, email, username, password) => {
    try {
      await dispatch(registerAction({ fullname, email, username, password })).then(unwrapResult);
      navigate('/login');
    } catch (error) {
      console.error("Register failed:", error);
      setError(error.message)
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(fullname, email, username, password);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return {
    register,
    error,
    handleSubmit,
    username,
    setUsername,
    password,
    setPassword,
    fullname,
    setFullname,
    email,
    setEmail
  };
}