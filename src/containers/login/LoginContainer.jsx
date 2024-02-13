import CardLoginImage from './parts/CardLoginImage';
import CardLoginForm from './parts/CardLoginForm';

function LoginContainer() {
  return (
    <>
      {/* <div className="bg-gray-100 flex justify-center items-center h-screen"> */}
      <div className="flex flex-row justify-center items-center h-screen">
        <div className='w-1/2'>
          <CardLoginImage />
        </div>
        <div className='w-1/2'>
          <CardLoginForm />
        </div>
      </div>
    </>

  )
}

export default LoginContainer














// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { AUTH_LOGIN } from '../../redux/sliceReducer';
// import { API, SetAuthToken } from '../../libs/API';







// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const navigate = useNavigate();
// const dispatch = useDispatch();

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   try {
//     const response = await API.post('/buyer/login', { username, password });
//     if (response.status === 200) {
//       SetAuthToken(response.data.token);
//       dispatch(AUTH_LOGIN(response.data));
//       navigate('/'); // Redirect ke halaman beranda
//     } else {
//       throw new Error('Login failed');
//     }
//   } catch (error) {
//     console.error('Login failed:', error);
//     // Tampilkan pesan kesalahan ke pengguna
//   }
// };