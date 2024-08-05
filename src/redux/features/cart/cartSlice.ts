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

        updateQuantity: (state, action) => {
            const targetedItem = state.find(item => item.id === action.payload.id);

            if (targetedItem) {
                const itemPrice = targetedItem?.payable as number / targetedItem?.quantity as number;

                if (action.payload.operationType === 'decrement') {

                    if (targetedItem.quantity > 1) {

                        targetedItem.quantity -= 1;
                        targetedItem.payable -= itemPrice;
                    }
                }

                if (action.payload.operationType === 'increment') {

                    targetedItem.quantity += 1;
                    targetedItem.payable += itemPrice;
                }
            }
        },

        deleteItem: (state, action) => {
            return state = state.filter(item => item.id !== action.payload.id);
        },

        clearCart: (state) => {
            state.length = 0
        }
    }
})

export const { addToCart, deleteItem, updateQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer