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
        {/* </Route> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default RoutePage;
