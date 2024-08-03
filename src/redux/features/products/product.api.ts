import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (query) => {
                const params = new URLSearchParams();
                let url = '/products'

                if (query?.category) params.append('category', query.category as string);
                if (query?.id) url = `/products/${query.id}`;

                return {
                    url,
                    method: 'GET',
                    params
                }
            }
        }),

        createProduct: builder.mutation({
            query: (payload) => ({
                url: '/products/new',
                method: 'POST',
                body: payload
            })
        })
    })
})

export const { useGetProductsQuery, useCreateProductMutation } = productApi