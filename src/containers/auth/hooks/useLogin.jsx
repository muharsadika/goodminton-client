import { useDispatch, useSelector } from 'react-redux';
import { login as loginAction } from '../../../redux/slice/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function useLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, isError } = useSelector((state) => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (username, password) => {
        try {
            const resultAction = await dispatch(
                loginAction({ username, password })
            );
            if (loginAction.fulfilled.match(resultAction)) {
                navigate('/');
                // toast.success('Login successful!');
                toast.success(resultAction.payload.message);
              } else {
                if (resultAction.payload) {
                  // toast.success('Login unsuccessful!');
                    toast.error(resultAction.payload);
                } else {
                    toast.error('Login failed');
                }
            }
        } catch (error) {
            toast.error('An error occurred');
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
    };

    return {
        handleLogin,
        onSubmit,
        username,
        setUsername,
        password,
        setPassword,
        isLoading,
        isError,
    };
}

export default useLogin;