import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../utils/API';

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
    // console.log(response.data);
    return response.data;
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ fullname, email, username, password }, thunkAPI) => {
    try {
      const response = await API.post('/buyer/register', {
        fullname,
        email,
        username,
        password,
      })

      return response.data
    }catch(error){
      if(error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data)
      } else {
        return thunkAPI.rejectWithValue({ error: error.message })
      }
    }
    // const response = await API.post('/buyer/register', {
    //   fullname,
    //   email,
    //   username,
    //   password,
    // });
    // // console.log(response.data);
    // return response.data;
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token');
  return {};
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
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
        console.log(action);
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
        console.log(action);
        state.status = 'failed';
        state.error = action.payload.error;
      });

    builder
      .addCase(logout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'idle';
        state.id = '';
        state.email = '';
        state.fullname = '';
        state.error = null;
      });
  },
});
