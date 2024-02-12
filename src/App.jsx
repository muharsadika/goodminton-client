import RoutePage from "./routers/RoutePage";
import { BrowserRouter as Router } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { login } from './redux/slice/authSlice';

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     // Anda mungkin perlu mengubah ini tergantung pada bagaimana action login Anda bekerja
  //     dispatch(login({ token }));
  //   }
  // }, [dispatch]);

  return (
    <Router>
      <RoutePage />
    </Router>
  )
}