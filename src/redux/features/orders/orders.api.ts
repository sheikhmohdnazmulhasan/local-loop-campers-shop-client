import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (payload) => ({
                url: '/orders',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['orders']
        }),

        getOrders: builder.query({
            query: (query) => {
                let url: string = '/orders';

                if (query?.id) url = `/orders/${query.id}` as string;

                return {
                    url,
                    method: 'GET'
                }
            },
            providesTags: ['orders']
        }),

        deleteOrder: builder.mutation({
            query: (query) => {
                const params = new URLSearchParams();
                if (query.id) params.append('id', query.id as string);

                return {
                    url: '/orders',
                    method: 'DELETE',
                    params
                };
            },
            invalidatesTags: ['orders'],
        })
    }),
});

export const { useCreateOrderMutation, useGetOrdersQuery, useDeleteOrderMutation } = orderApi