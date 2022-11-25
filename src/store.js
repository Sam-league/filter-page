import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/CounterSlice"
import productsReducer from "./Slices/ProductSlice"

const store = configureStore({
    reducer:{
        counter: counterReducer,
        products: productsReducer
    }
}) 


export default store;