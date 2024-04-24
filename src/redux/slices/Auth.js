import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async(params) => {
    const { data } = await axios.post('http://localhost:4444/auth/login', params);
    return data
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async(params) => {
    const { data } = await axios.post('http://localhost:4444/auth/register', params);
    return data
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async() => {
    const { data } = await axios.get('http://localhost:4444/auth/me', {
        headers: {
            Authorization: localStorage.getItem("token"),
        },
    });
    return data;
});

const initialState = {
    data: null,
    status: 'loading'
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        },
    },
    extraReducers: {
        [fetchUserData.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;

        },

        [fetchUserData.rejected]: (state) => {
            state.status = 'error';
            state.data = null;

        },
        [fetchAuthMe.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;

        },

        [fetchAuthMe.rejected]: (state) => {
            state.status = 'error';
            state.data = null;

        },

        [fetchRegister.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;

        },

        [fetchRegister.rejected]: (state) => {
            state.status = 'error';
            state.data = null;

        }
    }
});
export const selectIsAuth = state => Boolean(state.auth.data);
export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;