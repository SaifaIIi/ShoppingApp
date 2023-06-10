import { createSlice } from "@reduxjs/toolkit";

export const allProducts = createSlice({
  name: "allProducts",
  initialState: {
    value: [],
    category: [],
    categorySelected: "",
    model: { msg: "", show: false },
    // displayPopUp: { show: false, msg: "" },
  },
  reducers: {
    allData: (state, action) => {
      state.value = action.payload;
    },
    increment: (state, action) => {
      let data = state.value;
      let singleObj = state.value[action.payload];
      if (state.value[action.payload]) {
        singleObj = { ...singleObj, qty: singleObj.qty + 1 };
        data.splice(action.payload, 1, singleObj);
        state.value = data;
      }
    },

    decrement: (state, action) => {
      let data = state.value;
      let singleObj = state.value[action.payload];
      if (state.value[action.payload]) {
        singleObj = { ...singleObj, qty: singleObj.qty - 1 };
        data.splice(action.payload, 1, singleObj);
        state.value = data;
      }
    },
    deleteItem: (state, action) => {
      let data = state.value;
      let singleObj = state.value[action.payload];
      if (state.value[action.payload]) {
        singleObj = { ...singleObj, qty: 0 };
        data.splice(action.payload, 1, singleObj);
        state.value = data;
      }
    },
    addCategory: (state, action) => {
      let data = [
        ...new Set(
          action.payload.map((el) => {
            return el.category;
          })
        ),
      ];
      state.category = data;
    },

    categorySelector: (state, action) => {
      state.categorySelected = action.payload;
    },
    modelData: (state, action) => {
      state.model = { ...state.model, ...action.payload };
    },
  },
});

export const {
  allData,
  addCategory,
  categorySelector,
  increment,
  decrement,
  deleteItem,
  modelData,
} = allProducts.actions;

export default allProducts.reducer;
