import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  fullname: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    AUTH_LOGIN: (_, action) => {
      const payload = action.payload;
      // console.log(payload);
      const { id, email, fullname } = payload;
      const user = {
        id,
        email,
        fullname,
      };
      return user;
    },

    AUTH_CHECK: (_, action) => {
      const payload = action.payload;
      // console.log(payload);
      const { id, email, fullname } = payload;
      const user = {
        id,
        email,
        fullname,
      }
      return user;
    },

    AUTH_LOGOUT: () => {
      localStorage.removeItem("token");
      return initialState;
    },
  },
});
