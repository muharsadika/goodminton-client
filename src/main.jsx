
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/App.css'
import './assets/css/index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./redux/rootReducer.js"

const client = new QueryClient();

const store = configureStore({
  reducer: rootReducer,
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <QueryClientProvider client={client}>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </QueryClientProvider>
  </>
)