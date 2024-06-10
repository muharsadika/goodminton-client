import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import profileReducer from './slice/profileSlice';
import cartReducer from './slice/cartSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        cart: cartReducer,
    },
});

export default store;
