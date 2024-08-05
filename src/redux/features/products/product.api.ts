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
            },
            providesTags: ['product']
        }),

        createProduct: builder.mutation({
            query: (payload) => ({
                url: '/products/new',
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: ['product']
        }),

        updateProducts: builder.mutation({
            query: (payload) => ({
                url: `products/${payload.id}`,
                method: 'PUT',
                body: payload.data,
            }),
            invalidatesTags: ['product']
        }),
    }),
});


export const { useGetProductsQuery, useCreateProductMutation, useUpdateProductsMutation } = productApi