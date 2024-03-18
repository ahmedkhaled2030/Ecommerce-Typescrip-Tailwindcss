import { Categories } from "@pages/Categories";
import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCategories from "./act/actGetProductsByCategories";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/product";

// type TCategoriesState  = {
//     records: { id: number; title: string; prefix: string; img: string }[];
//     loading: "idle" | "pending" | "succeeded" | "failed";
//     error: string | null;
//   }

interface ICategoriesState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductsByCategories.rejected, (state, action) => {
      state.loading = "succeeded";
      state.error = action.payload as string; // casting
    });
  },
});

export const { productsCleanUp } = productsSlice.actions;

export { actGetProductsByCategories };

export default productsSlice.reducer;
