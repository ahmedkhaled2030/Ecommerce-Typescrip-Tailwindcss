import { TCategory } from "@customTypes/catgeory";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// categories:name of slice/actGetCategories
// async (payload, thunkAPI)
type TResponse = TCategory[];
const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get<TResponse>(
        "http://localhost:5005/categories"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);
export default actGetCategories