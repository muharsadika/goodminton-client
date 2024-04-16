import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../utils/API';

// const initialState = {
//   items: [],
// };

export const getCart = createAsyncThunk('cart/getCart', async () => {
  const response = await API.get('/buyer/auth/get-cart', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
});

// Async thunk untuk menambahkan produk ke keranjang
export const addProductToCart = createAsyncThunk(
  'cart/addProduct',
  async (product) => {
    const response = await API.post('/buyer/auth/add-cart', product, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  }
);

// Async thunk untuk menghapus produk dari keranjang
export const removeProductFromCart = createAsyncThunk(
  'cart/removeProduct',
  async (productId) => {
    const response = await API.delete(`/buyer/auth/delete-cart/${productId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  }
);

// Slice keranjang
export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        return action.payload;
        // state.status = 'succeeded';
        // state = action.payload.data.items;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.push(action.payload); // Menambahkan produk baru ke state keranjang
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        return state.filter((item) => item.id !== action.payload.id); // Menghapus produk dari state keranjang
      });
  },
});

// export const { actions, reducer } = cartSlice;
