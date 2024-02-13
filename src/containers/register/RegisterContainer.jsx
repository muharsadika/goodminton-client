import CardRegisterImage from "./parts/CardRegisterImage";
import CardRegisterForm from "./parts/CardRegisterForm";

function RegisterContainer() {
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2">
          <CardRegisterImage />
        </div>
        <div className="w-1/2">
          <CardRegisterForm />
        </div>
      </div>
    </>
  )
}

export default RegisterContainer