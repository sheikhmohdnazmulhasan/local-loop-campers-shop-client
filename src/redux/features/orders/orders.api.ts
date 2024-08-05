import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (payload) => ({
                url: '/orders',
                method: 'POST',
                body: payload
            }),
        }),

        getOrders: builder.query({
            query: (query) => {
                let url: string = '/orders';

                if (query?.id) url = `/orders/${query.id}` as string;

                return {
                    url,
                    method: 'GET'
                }
            }
        })
    }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = orderApi