import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../utils/API';

export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await API.post('/buyer/login', {
                username,
                password,
            });
            // console.log('response', response);
            return response.data;
        } catch (error) {
            // console.log('error', error);
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
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
            });
            // console.log(response.data);
            return response.data;
        } catch (error) {
            // console.log('error', error);
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);

export const logout = createAsyncThunk('auth/logout', async () => {
    localStorage.removeItem('token');
    return {};
});

const initialState = {
    id: '',
    email: '',
    fullname: '',
    message: '',
    isLoading: false,
    isError: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                // console.log(action.payload);
                localStorage.setItem('token', action.payload.token);
                state.isLoading = false;
                state.isError = false;
                state.error = null;
                state.id = action.payload.id;
                state.email = action.payload.email;
                state.fullname = action.payload.fullname;
                state.message = action.payload.message;
            })
            .addCase(login.rejected, (state, action) => {
                // console.log(`action`, action);
                // console.log(`action.payload`, action.payload);
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            });

        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.isLoading = false;
                state.isError = false;
                state.error = null;
                state.id = action.payload.id;
                state.email = action.payload.email;
                state.fullname = action.payload.fullname;
                state.username = action.payload.username;
            })

            .addCase(register.rejected, (state, action) => {
                // console.log(action.payload);
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            });

        builder
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;
                state.error = null;
                state.id = '';
                state.email = '';
                state.fullname = '';
            });
    },
});

export default authSlice.reducer;
