import { Link } from 'react-router-dom';
import AuthInputForm from '../../auth/AuthInputForm';
import { useLogin } from '../hooks/useLogin'

function LoginForm() {
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
        <AuthInputForm
          label="Username"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <AuthInputForm
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
  );
}

export default LoginForm;
