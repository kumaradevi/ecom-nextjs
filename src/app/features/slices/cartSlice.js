const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    carts:[],
    loading:false,
    error:false
}


const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        setcarts:(state,action)=>{
            state.carts=action.payload;
        },
        setcartLoading:(state,action)=>{
            state.loading=action.payload
        },
        setcartError:(state,action)=>{
            state.error=action.payload
        }
    }
    
})
export const {setcarts,setcartLoading,setcartError}=cartSlice.actions;
export const selectcarts=(state)=>state.cart.carts;
export const selectcartLoading=(state)=>state.cart.loading;
export const selectcartError=(state)=>state.cart.error;
export default cartSlice.reducer;