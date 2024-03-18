import { createSelector, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";
import {getCartTotalQuantitySelector} from './selectors/index'
interface ICartSlice {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}

const initialState: ICartSlice = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});



export { getCartTotalQuantitySelector };
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
