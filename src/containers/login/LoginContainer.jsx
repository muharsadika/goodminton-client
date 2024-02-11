import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './hook/useLogin';

function LoginContainer() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useLogin();

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


  return (
    <div>
      <>
        {/* component */}
        <div className="bg-gray-100 flex justify-center items-center h-screen">
          {/* Left: Image */}
          <div className="w-1/2 h-screen hidden lg:block">
            <img
              // src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
              src="/src/assets/images/card-player-collection/web-player5.webp"
              alt="Placeholder Image"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Right: Login Form */}
          <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
              {/* Username Input */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {/* Password Input */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Remember Me Checkbox */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="text-blue-500"
                />
                <label htmlFor="remember" className="text-gray-600 ml-2">
                  Remember Me
                </label>
              </div>
              {/* Forgot Password Link */}
              <div className="mb-6 text-blue-500">
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                Login
              </button>
            </form>
            {/* Sign up  Link */}
            <div className="mt-6 text-center">
              <p>Don’t have an account?</p>
              <a href="/register" className="hover:underline text-blue-500">
                Sign up Here
              </a>
            </div>
          </div>
        </div>
      </>

    </div >
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