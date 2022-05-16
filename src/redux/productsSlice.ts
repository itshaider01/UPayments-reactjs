import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../interface";
import { RootState } from "./store";

interface IProductsState {
  value: IProduct[];
}

const initialState: IProductsState = {
  value: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.value = action.payload;
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.value.push(action.payload);
    },
  },
});
export const { setProducts, addProduct } = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products.value;
export default productsSlice.reducer;
