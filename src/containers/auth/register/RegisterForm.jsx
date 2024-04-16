import { Link } from 'react-router-dom';
import AuthInputForm from '../../auth/AuthInputForm';
import { useRegister } from '../hooks/useRegister';

function RegisterForm() {
  const { handleSubmit, username, setUsername, password, setPassword, fullname, setFullname, email, setEmail } = useRegister();

  return (
    <div className="w-full p-36 h-screen">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <AuthInputForm
          label="Full Name"
          type="text"
          id="fullname"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <AuthInputForm
          label="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Register
        </button>
      </form>
      <div className="mt-6 text-center">
        <p>already have an account? </p>
        <Link to="/login" className="hover:underline text-blue-500">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm;
