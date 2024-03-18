
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";


//listen up on the state if any changes it will invoke that code if no change it will return the old value cause it saves it

const getCartTotalQuantitySelector = createSelector(
    (state:RootState) => state.cart.items,
    (items) => {
      const totalQuantity = Object.values(items).reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue;
        },
        0
      );
      return totalQuantity;
    }
);
  

export {getCartTotalQuantitySelector}