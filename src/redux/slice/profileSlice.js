// src/redux/slice/profileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../libs/API';

const initialState = {
  id: '',
  email: '',
  fullname: '',
  profile_picture: '',
  status: 'idle',
  error: null,
};

export const getProfile = createAsyncThunk('profile', async () => {
  try {
    const response = await API.get('/buyer/auth/check-auth', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    // Jika token sudah kedaluwarsa atau terjadi kesalahan lain saat meminta profil
    // Anda dapat menangani kasus ini di sini
    if (error.response && error.response.status === 401) {
      // Hapus token dari penyimpanan lokal
      localStorage.removeItem('token');
    }
    throw error;
  }
});

// export const getProfile = createAsyncThunk('profile', async () => {
//   const response = await API.get('/buyer/auth/check-auth', {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   });
//   return response.data;
// });

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.status = 'succeeded';
        state.id = action.payload.data.id;
        state.email = action.payload.data.email;
        state.fullname = action.payload.data.fullname;
        state.profile_picture = action.payload.data.profile_picture;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
