// src/redux/slice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API, SetAuthToken } from '../../libs/API';

const initialState = {
  id: '',
  email: '',
  fullname: '',
  status: 'idle',
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }) => {
    const response = await API.post('/buyer/login', {
      username,
      password,
    });
    return response.data;
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ fullname, email, username, password }) => {
    const response = await API.post('/buyer/register', {
      fullname,
      email,
      username,
      password,
    });
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    AUTH_LOGOUT: () => {
      localStorage.removeItem('token');
      SetAuthToken(null);
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        const { id, email, fullname } = action.payload;
        // console.log(action.payload);
        localStorage.setItem('token', action.payload.token);
        state.status = 'succeeded';
        state.id = id;
        state.email = email;
        state.fullname = fullname;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        const { id, email, fullname, username } = action.payload;
        state.status = 'succeeded';
        state.id = id;
        state.email = email;
        state.fullname = fullname;
        state.username = username;
        state.error = null;
      })

      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   id: '',
//   email: '',
//   fullname: '',
//   token: '',
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: initialState,
//   reducers: {
//     AUTH_LOGIN: (_, action) => {
//       const payload = action.payload;
//       // console.log(payload);
//       const { id, email, fullname, token } = payload;
//       const user = {
//         id,
//         email,
//         fullname,
//         token,
//       };
//       return user;
//     },

//     AUTH_CHECK: (_, action) => {
//       const payload = action.payload;
//       // console.log(payload);
//       const { id, email, fullname, token } = payload;
//       const user = {
//         id,
//         email,
//         fullname,
//         token,
//       };
//       return user;
//     },

//     AUTH_LOGOUT: () => {
//       localStorage.removeItem('token');
//       return initialState;
//     },
//   },
// });
