import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../interface";
import { RootState } from "./store";

interface ICategoryState {
  value: ICategory[];
}

const initialState: ICategoryState = {
  value: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.value = action.payload;
    },
  },
});
export const { setCategories } = categorySlice.actions;
export const selectCategory = (state: RootState) => state.categories.value;
export default categorySlice.reducer;
