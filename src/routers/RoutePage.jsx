/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import Racket from "../pages/Racket";
import RacketDetail from "../pages/RacketDetail";


function RoutePage() {
  function IsNotLogin() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/login" />;
    } else {
      return <Outlet />;
    }
  }
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<IsNotLogin />}> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/racket" element={<Racket />} />
        <Route path="/racket/:id" element={<RacketDetail />} />
        {/* </Route> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default RoutePage;
