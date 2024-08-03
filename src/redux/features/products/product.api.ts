import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (payload) => ({
                url: '/products/new',
                method: 'POST',
                body: payload
            })
        })
    })
})

export const { useCreateProductMutation } = productApi