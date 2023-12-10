import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
    const { data } = await axios.get('http://localhost:3000');
    return data;
})

const initialState = {
    posts: {
        items: [],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading'
    },
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}

});
export const postsReducer = postsSlice.reducer;