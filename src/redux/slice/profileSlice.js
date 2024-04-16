import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../utils/API';

const initialState = {
  id: '',
  fullname: '',
  username: '',
  email: '',
  address: '',
  phone: '',
  profile_picture: '',
  carts: {
    items: [],
    cart_total_quantity: 0,
    cart_total_price: 0,
  },
  status: 'idle',
  error: null,
};

export const getProfile = createAsyncThunk('profile', async () => {
  try {
    const response = await API.get('/buyer/auth/get-profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    // console.log(response.data.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
    }
    throw error;
  }
});

export const updateProfile = createAsyncThunk(
  'profile/update',
  async (data) => {
    const response = await API.patch('/buyer/auth/update-profile', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  }
);

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
        state.username = action.payload.data.username;
        state.address = action.payload.data.address;
        state.phone = action.payload.data.phone;
        state.profile_picture = action.payload.data.profile_picture;
        state.carts = action.payload.data.carts;
        state.carts.items = action.payload.data.carts.items;
        state.carts.cart_total_quantity =
          action.payload.data.carts.cart_total_quantity;
        state.carts.cart_total_price =
          action.payload.data.carts.cart_total_price;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(updateProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.status = 'succeeded';
        state.fullname = action.payload.data.fullname;
        state.username = action.payload.data.username;
        state.email = action.payload.data.email;
        state.phone = action.payload.data.phone;
        state.address = action.payload.data.address;
        if (action.payload.data.profile_picture) {
          state.profile_picture = action.payload.data.profile_picture;
        }
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
