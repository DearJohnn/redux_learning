import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath:"myApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com"}),
    endpoints:(builder)=>({
        getList:builder.query({
            query:()=>"/comments"
        })
    })
})

export const {useGetListQuery} = api;
export default api;