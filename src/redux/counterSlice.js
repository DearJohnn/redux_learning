import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,{payload})=>{
            state.value += payload;
        }
    }
})

export const {increment} = counterSlice.actions
export default counterSlice.reducer