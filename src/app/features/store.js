const { configureStore } = require("@reduxjs/toolkit");
import authSliceReducer from "@/app/features/slices/authSlice";
import userSliceReducer from "@/app/features/slices/userSlice"

const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        user:userSliceReducer,
    }
})

export default store;