import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import commentSlice  from "./commentSlice";

export const store = configureStore({
    reducer:{
        counterSlice,
        commentSlice
    }
})