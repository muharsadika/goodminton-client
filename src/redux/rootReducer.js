import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, profileReducer } from './sliceReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
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