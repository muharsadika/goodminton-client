import { authSlice } from './slice/authSlice';

export const { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } = authSlice.actions;
export const authReducer = authSlice.reducer;
