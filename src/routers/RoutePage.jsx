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

function RoutePage() {

  function isLogin() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/login" />;
    } else {
      return <Outlet />;
    }
  }

  function isNotLogin() {
    const token = localStorage.getItem("token");
    if (token) {
      return <Navigate to="/" />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <>
      <Routes>
        <Route element={isLogin()}>
          <Route path="/" element={<Home />} />
          <Route path="/rackets" element={<Racket />} />
          <Route path="/rackets/:id" element={<RacketDetail />} />
          <Route path="/strings" element={<String />} />
          <Route path="/strings/:id" element={<StringDetail />} />
        </Route>
        <Route element={isNotLogin()}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default RoutePage;






















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
