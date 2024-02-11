import {
  Routes,
  Route,
  // Navigate,
  // Outlet,
  // useNavigate,
} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Racket from "../pages/Racket";
import RacketDetail from "../pages/RacketDetail";
import String from "../pages/String";
import StringDetail from "../pages/StringDetail";
import Test from "../pages/Test";
// import { useDispatch, useSelector } from "react-redux";
// import { AUTH_CHECK } from "../redux/authReducer";
// import { useEffect, useState } from "react";
// import { API, SetAuthToken } from "../libs/API.js";


function RoutePage() {
  // function IsNotLogin() {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     return <Navigate to="/login" />;
  //   } else {
  //     return <Outlet />;
  //   }
  // }

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
        {/* <Route path="/" element={<IsNotLogin />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/rackets" element={<Racket />} />
        <Route path="/rackets/:id" element={<RacketDetail />} />
        <Route path="/strings" element={<String />} />
        <Route path="/strings/:id" element={<StringDetail />} />

        <Route path="/test" element={<Test />} />
        {/* </Route> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default RoutePage;
