import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
}

type ShoppingCartState = Record<string, { quantity: number }>;

const initialState: ShoppingCartState = {};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  // Event listeners / handlers
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { id } = action.payload;

      if (state[id]) {
        state[id].quantity += 1;
      } else {
        state[id] = { quantity: 1 };
      }
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const { id } = action.payload;
      delete state[id];
    },
  },
  // so that the UI can read the state
  selectors: {
    selectTotalQuantity: (state) =>
      Object.values(state).reduce((acc, item) => acc + item.quantity, 0),
  },
});

// Automatically generated action creators so that the UI can dispatch actions
export const { addItem, removeItem } = shoppingCartSlice.actions;

export const { selectTotalQuantity } = shoppingCartSlice.selectors;

export default shoppingCartSlice;
