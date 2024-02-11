import { authSlice } from './slice/authSlice';
import { profileSlice } from './slice/profileSlice';

export const { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const profileReducer = profileSlice.reducer;
