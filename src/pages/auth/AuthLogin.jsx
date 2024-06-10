import AuthImage from '../../containers/auth/AuthImage';
import LoginForm from '../../containers/auth/login/LoginForm';

function AuthLogin() {
    return (
        <div className="bg-gray-100 flex flex-col md:flex-row justify-center items-center">
            <div className="hidden sm:block w-full md:w-1/2">
                <AuthImage
                    imageUrl={import.meta.env.VITE_CARD_PLAYER_COLLECTION_6}
                />
            </div>
            <div className="w-full md:w-1/2">
                <LoginForm />
            </div>
        </div>
    );
}

export default AuthLogin;
