import useLogin from '../hooks/useLogin';
import AuthInputForm from '../../auth/AuthInputForm';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const { onSubmit, username, setUsername, password, setPassword, isLoading } =
        useLogin();

    return (
        <div className="p-20 md:p-20 lg:p-48 h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form onSubmit={onSubmit} className="w-full max-w-md">
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
                    disabled={isLoading}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                >
                    {isLoading ? 'Loading...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
