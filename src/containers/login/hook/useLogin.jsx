import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginAction } from '../../../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await login(username, password);
      if (result) {
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return { login, error, handleSubmit, username, setUsername, password, setPassword };
}
