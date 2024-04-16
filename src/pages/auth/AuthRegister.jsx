import AuthImage from '../../containers/auth/AuthImage'
import RegisterForm from '../../containers/auth/register/RegisterForm'

function AuthRegister
  () {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2">
        <AuthImage imageUrl={import.meta.env.VITE_CARD_PLAYER_COLLECTION_6} />
      </div>
      <div className="w-1/2">
        <RegisterForm />
      </div>
    </div>
  );
}

export default AuthRegister
  ;
