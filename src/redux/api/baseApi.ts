import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://local-loop-server.vercel.app/api/v1' }),
    tagTypes: ['product', 'orders'],
    endpoints: () => ({})
})