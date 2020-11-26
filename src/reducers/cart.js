import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id)

      if (existingItem) {
      existingItem.quantity += 1
      } else {
      state.cartItems.push({...action.payload, quantity: 1})
      }
    },

    decrease: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id)

      if (existingItem && existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
      } else {
        existingItem.quantity -= 1
      }
    }
  }
})

export default cart