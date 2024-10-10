import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrease quantity
        } else {
          state.items = state.items.filter(item => item.card.info.id !== action.payload.card.info.id); // Remove item if quantity is 0
        }
      }
    },
    clearCart: (state) => {
      state.items = []; // Clear the cart
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
