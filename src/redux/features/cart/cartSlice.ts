import { createSlice } from "@reduxjs/toolkit";


export interface ICart { id: string; title: string; img: string; quantity: number; payable: number }

export type TCart = ICart[]
const initialState: TCart = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.find(item => item.id === action.payload.id);

            if (isExist) {
                isExist.quantity += action.payload.quantity;
                isExist.payable += action.payload.payable;
                return
            }

            state.push(action.payload);
        },

        deleteItem: (state, action) => {
            return state = state.filter(item => item.id !== action.payload.id);
        }
    }
})

export const { addToCart, deleteItem } = cartSlice.actions

export default cartSlice.reducer