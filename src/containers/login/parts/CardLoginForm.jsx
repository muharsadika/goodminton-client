import { Link } from 'react-router-dom';
import { useLogin } from '../hook/useLogin';


function CardLoginForm() {
  const {
    handleSubmit,
    username,
    setUsername,
    password,
    setPassword
  } = useLogin();


  return (
    <div className="w-full p-36 h-screen">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>

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

        <div className="mb-6 text-blue-500">
          <Link to="#" className="hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Login
        </button>

      </form>
      <div className="mt-6 text-center">
        <p>Don’t have an account?</p>
        <Link to="/register" className="hover:underline text-blue-500">
          Sign up Here
        </Link>
      </div>
    </div>
  )
}

export default CardLoginForm