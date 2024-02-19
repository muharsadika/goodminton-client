import { Provider } from "react-redux";
import RoutePage from "./routers/RoutePage";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/rootReducer";

export default function App() {
  const client = new QueryClient();

  const store = configureStore({
    reducer: rootReducer,
  })

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