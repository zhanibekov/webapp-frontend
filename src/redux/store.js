import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './slices/Posts';

const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
});
export default store;