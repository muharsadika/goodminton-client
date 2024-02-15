import { Provider } from "react-redux";
import RoutePage from "./routers/RoutePage";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/rootReducer";
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { login } from './redux/slice/authSlice';

export default function App() {
  const client = new QueryClient();

  const store = configureStore({
    reducer: rootReducer,
  })
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     // Anda mungkin perlu mengubah ini tergantung pada bagaimana action login Anda bekerja
  //     dispatch(login({ token }));
  //   }
  // }, [dispatch]);


  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Router>
          <RoutePage />
        </Router>
      </Provider>
    </QueryClientProvider>
  )
}