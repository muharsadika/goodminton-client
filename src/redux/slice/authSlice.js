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
    status: 'idle',
    error: null,
};

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
                // console.log(action.payload);
                const { id, email, fullname, token } = action.payload;
                localStorage.setItem('token', token);
                state.status = 'succeeded';
                state.id = id;
                state.email = email;
                state.fullname = fullname;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                // console.log(`action`, action);
                // console.log(`action.payload`, action.payload);
                state.status = 'failed';
                state.error = action.payload;
            });

        builder
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state, action) => {
                // console.log(action.payload);
                const { id, email, fullname, username } = action.payload;
                state.status = 'succeeded';
                state.id = id;
                state.email = email;
                state.fullname = fullname;
                state.username = username;
                state.error = null;
            })

            .addCase(register.rejected, (state, action) => {
                // console.log(action.payload);
                state.status = 'failed';
                state.error = action.payload;
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
