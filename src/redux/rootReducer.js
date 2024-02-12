// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './slice/authSlice';
import { profileSlice } from './slice/profileSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  profile: profileSlice.reducer,
});

export default rootReducer;

// import { authSlice } from "./slice/authSlice";
// import { combineReducers } from "@reduxjs/toolkit";

// export const { AUTH_LOGIN, AUTH_CHECK, AUTH_LOGOUT } = authSlice.actions;

// export const AuthReducer = authSlice.reducer;

// const RootReducer = combineReducers({
//   auth: authSlice.reducer,
// });

// export default RootReducer;
