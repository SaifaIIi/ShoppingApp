import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./features/productDatas/allProducts";

export default configureStore({
  reducer: {
    allProducts: allProductsReducer,
  },
});
