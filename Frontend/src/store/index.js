import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./basketReducer";
import { categoriesReducer } from "./categoriesReducer";
import { categoryReducer } from "./categoryReducer";
import { oneProductReducer } from "./ProductReducer";
import { productsReducer } from "./productsReducer";


export const store = configureStore({
  reducer: {
    categoriesList: categoriesReducer,
    category: categoryReducer,
    productsList: productsReducer,
    oneProduct: oneProductReducer,
    basket: basketReducer,
  }
});
