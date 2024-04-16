import AuthImage from '../../containers/auth/AuthImage'
import LoginForm from '../../containers/auth/login/LoginForm'

function AuthLogin() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2">
        <AuthImage imageUrl={import.meta.env.VITE_CARD_PLAYER_COLLECTION_6} />
      </div>
      <div className="w-1/2">
        <LoginForm />
      </div>
    </div>
  );
}

export default AuthLogin;
