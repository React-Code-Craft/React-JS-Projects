import { configureStore } from "@reduxjs/toolkit";
import postreducer from '../Slices/Posts/index'

const store = configureStore({
    reducer: {
        posts:postreducer
    },
});

export default store;