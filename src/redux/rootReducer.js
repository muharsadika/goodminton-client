// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './slice/authSlice';
import { profileSlice } from './slice/profileSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  profile: profileSlice.reducer,
});

export default rootReducer;
