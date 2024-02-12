// RoutePage.jsx
// import React from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux"; // Untuk mengakses state Redux
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Home from "../pages/Home";
// import Racket from "../pages/Racket";
// import RacketDetail from "../pages/RacketDetail";
// import String from "../pages/String";
// import StringDetail from "../pages/StringDetail";
// import { selectIsAuthenticated } from "../redux/authSlice"; // Mengambil state autentikasi

// function RoutePage() {
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const navigate = useNavigate();

//   // Fungsi untuk memeriksa apakah pengguna diizinkan mengakses rute tertentu
//   const checkAccess = () => {
//     // Jika pengguna tidak terautentikasi, arahkan kembali ke halaman login
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//   };

//   // Panggil checkAccess di setiap render
//   React.useEffect(() => {
//     checkAccess();
//   }, [isAuthenticated]); // Jalankan ulang efek saat status autentikasi berubah

//   return (
//     <Routes>
//       {/* Rute yang memerlukan autentikasi */}
//       <Route path="/" element={<Home />} />
//       <Route path="/rackets" element={<Racket />} />
//       <Route path="/rackets/:id" element={<RacketDetail />} />
//       <Route path="/strings" element={<String />} />
//       <Route path="/strings/:id" element={<StringDetail />} />

//       {/* Rute yang dapat diakses tanpa autentikasi */}
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   );
// }

// export default RoutePage;



// import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Login from "../pages/Login";
// import Home from "../pages/Home";
// import Register from "../pages/Register";
// import Racket from "../pages/Racket";
// import RacketDetail from "../pages/RacketDetail";
// import String from "../pages/String";
// import StringDetail from "../pages/StringDetail";

// function RoutePage() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/rackets" element={isAuthenticated ? <Racket /> : <Navigate to="/login" />} />
//         <Route path="/rackets/:id" element={isAuthenticated ? <RacketDetail /> : <Navigate to="/login" />} />
//         <Route path="/strings" element={isAuthenticated ? <String /> : <Navigate to="/login" />} />
//         <Route path="/strings/:id" element={isAuthenticated ? <StringDetail /> : <Navigate to="/login" />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </>
//   );
// }

// export default RoutePage;






// import { Routes, Route, useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import Login from "../pages/Login";
// import Home from "../pages/Home";
// import Register from "../pages/Register";
// import Racket from "../pages/Racket";
// import RacketDetail from "../pages/RacketDetail";
// import String from "../pages/String";
// import StringDetail from "../pages/StringDetail";

// function RoutePage() {
//   const { status } = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (status !== 'succeeded') {
//       navigate('/login');
//     }
//   }, [status, navigate]);

//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/" element={status === 'succeeded' ? <Home /> : <Login />} />
//       <Route path="/rackets" element={status === 'succeeded' ? <Racket /> : <Login />} />
//       <Route path="/rackets/:id" element={status === 'succeeded' ? <RacketDetail /> : <Login />} />
//       <Route path="/strings" element={status === 'succeeded' ? <String /> : <Login />} />
//       <Route path="/strings/:id" element={status === 'succeeded' ? <StringDetail /> : <Login />} />
//     </Routes>
//   );
// }

// export default RoutePage;





// import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import propTypes from "prop-types";

// // Halaman
// import Login from "../pages/Login";
// import Home from "../pages/Home";
// import Register from "../pages/Register";
// import Racket from "../pages/Racket";
// import RacketDetail from "../pages/RacketDetail";
// import String from "../pages/String";
// import StringDetail from "../pages/StringDetail";

// PrivateRoute.propTypes = {
//   children: propTypes.node.isRequired,
// };

// // Komponen PrivateRoute
// function PrivateRoute({ children, ...props }) {
//   const { status } = useSelector((state) => state.auth);
//   return status === 'succeeded' ? (
//     <Route {...props}>{children}</Route>
//   ) : (
//     <Navigate to="/login" replace />
//   );
// }

// function RoutePage() {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <PrivateRoute path="/" element={<Home />} />
//       <PrivateRoute path="/rackets" element={<Racket />} />
//       <PrivateRoute path="/rackets/:id" element={<RacketDetail />} />
//       <PrivateRoute path="/strings" element={<String />} />
//       <PrivateRoute path="/strings/:id" element={<StringDetail />} />
//     </Routes>
//   );
// }

// export default RoutePage;


import {
  Routes,
  Route,
  Navigate,
  Outlet,
  // useNavigate,
} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Racket from "../pages/Racket";
import RacketDetail from "../pages/RacketDetail";
import String from "../pages/String";
import StringDetail from "../pages/StringDetail";
// import { useEffect } from "react";

// import Test from "../pages/Test";
// import { useDispatch, useSelector } from "react-redux";
// import { AUTH_CHECK } from "../redux/sliceReducer";
// import { useEffect, useState } from "react";
// import { API, SetAuthToken } from "../libs/API.js";


function RoutePage() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     // Jika tidak ada token, arahkan pengguna ke halaman login
  //     navigate('/login');
  //   } else {
  //     // Jika ada token, lakukan pemeriksaan tambahan untuk memastikan token masih valid
  //     // Misalnya, Anda dapat memeriksa token ke endpoint tertentu untuk memverifikasinya
  //     // Di sini, saya akan membuat permintaan ke endpoint yang Anda sebutkan
  //     const checkTokenValidity = async () => {
  //       try {
  //         const response = await fetch('http://localhost:5000/api/buyer/auth/check-auth', {
  //           method: 'GET',
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         if (!response.ok) {
  //           // Jika token tidak valid atau sudah kedaluwarsa, arahkan pengguna ke halaman login
  //           navigate('/login');
  //         }
  //       } catch (error) {
  //         console.error('Error checking token validity:', error);
  //         // Jika ada kesalahan saat memeriksa token, arahkan pengguna ke halaman login
  //         navigate('/login');
  //       }
  //     };

  //     checkTokenValidity();
  //   }
  // }, [navigate]);

  function IsNotLogin() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/login" />;
    } else {
      return <Outlet />;
    }
  }

  // const auth = useSelector((state) => state.auth);
  // console.log(auth);

  // const [isLoading, setIsLoading] = useState(true);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // async function authCheck() {
  //   try {
  //     SetAuthToken(localStorage.token);
  //     const response = await API.get("/buyer/auth/check-auth");
  //     // console.log("check auth app", response);
  //     dispatch(AUTH_CHECK(response.data.data));
  //     setIsLoading(false);
  //   } catch (error) {
  //     // dispatch(AUTH_ERROR());
  //     console.log("auth check error", error);
  //     setIsLoading(false);
  //     navigate("/login");
  //   }
  // }

  // useEffect(() => {
  //   if (localStorage.token) {
  //     authCheck();
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, []);

  // function IsNotLogin() {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     return <Navigate to="/login" />;
  //   } else {
  //     return <Outlet />;
  //   }
  // }


  return (
    <>
      <Routes>
        <Route path="/" element={<IsNotLogin />}>
          <Route path="/" element={<Home />} />
          <Route path="/rackets" element={<Racket />} />
          <Route path="/rackets/:id" element={<RacketDetail />} />
          <Route path="/strings" element={<String />} />
          <Route path="/strings/:id" element={<StringDetail />} />

          {/* <Route path="/test" element={<Test />} /> */}
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default RoutePage;
