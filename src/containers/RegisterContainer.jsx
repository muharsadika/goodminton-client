function RegisterContainer() {
  return (
    <div>
      <>
        {/* component */}
        <div className="bg-gray-100 flex justify-center items-center h-screen">
          {/* Left: Image */}
          <div className="w-1/2 h-screen hidden lg:block">
            <img
              src="https://vsmash.com/wp-content/uploads/2023/08/web-player2.webp"
              alt="Placeholder Image"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Right: Login Form */}
          <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Register</h1>
            <form action="#" method="POST">
              {/* Fullname Input */}
              <div className="mb-4">
                <label htmlFor="fullname" className="block text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
              </div>
              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                  email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
              </div>
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
                />
              </div>
              {/* Register Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                Register
              </button>
            </form>
            {/* Sign up  Link */}
            <div className="mt-6 text-center">
              <p>already have an account? </p>
              <a href="/login" className="hover:underline text-blue-500">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}

export default RegisterContainer