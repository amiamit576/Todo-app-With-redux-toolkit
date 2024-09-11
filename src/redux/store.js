import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Slice/Todoslice';

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    devTools: true
});

export default store;