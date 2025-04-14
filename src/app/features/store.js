const { configureStore } = require("@reduxjs/toolkit");
import authSliceReducer from "@/app/features/slices/authSlice";
import userSliceReducer from "@/app/features/slices/userSlice";
import productSliceReducer from "@/app/features/slices/productSlice"

const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        user:userSliceReducer,
        products:productSliceReducer,
    }
})

export default store;