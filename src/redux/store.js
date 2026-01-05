import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import commentSlice  from "./commentSlice";
import api from "./api";

export const store = configureStore({
    reducer:{
        [api.reducerPath]:api.reducer
        // counterSlice,
        // commentSlice
    },

    middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(api.middleware)
})