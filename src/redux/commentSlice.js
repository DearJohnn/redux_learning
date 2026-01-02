import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setThunk2 = createAsyncThunk(
    "comments/fetchComments",
    async (url) => {
        const res = await axios.get(url);
        return res.data;
    }
)

export const commentSlice = createSlice({
    name:"comments",
    initialState:{
        commentsArr:[],
        isLoading:false
    },
    extraReducers:builder =>{
        builder.addCase(setThunk2.pending,state => {
            state.isLoading = true;
        }).addCase(setThunk2.fulfilled,(state,{payload})=>{
            state.commentsArr = payload;
            state.isLoading = false;
        }).addCase(setThunk2.rejected,()=>{
            state.isLoading = false;
        })
    },

    // reducers:{
    //     setArr:(state,{payload})=>{
    //         state.commentsArr = payload
    //     }
    // }
})



// export const {setArr} = commentSlice.actions

// const setThunk = url => async (dispatch)=>{
//     const res = await axios.get(url);
//     dispatch(setArr(res.data))
// }

//https://jsonplaceholder.typicode.com/comments
export default commentSlice.reducer
export { setThunk2 } 