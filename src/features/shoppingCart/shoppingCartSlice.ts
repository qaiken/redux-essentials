import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
}

type ShoppingCartState = Record<string, { quantity: number }>;

const initialState: ShoppingCartState = {};

// Step 1: Setup a slice ///////////////////////////////
// Slices combine the concepts of state, reducers,
// actions, action creators, and selectors into a single "feature"
const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  // Event listeners / handlers
  reducers: {
    // Every event listener has a corresponding action creator
    itemAdded: (state, action: PayloadAction<CartItem>) => {
      const { id } = action.payload;

      if (state[id]) {
        state[id].quantity += 1;
      } else {
        state[id] = { quantity: 1 };
      }
    },
    // Reducer names (and actions) should typically be named past-tense
    // because we're describing "an event that occurred in the application"w
    itemRemoved: (state, action: PayloadAction<CartItem>) => {
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

// Automatically generated action creators for each reducer function
// based on the name of the reducer function and the type of the action
// Used so that the UI can dispatch actions / trigger events.
export const { itemAdded, itemRemoved } = shoppingCartSlice.actions;

export const { selectTotalQuantity } = shoppingCartSlice.selectors;

export default shoppingCartSlice;
