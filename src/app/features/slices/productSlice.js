const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    products:[],
    loading:false,
    error:false
}


const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        setproducts:(state,action)=>{
            state.products=action.payload;
        },
        setproductLoading:(state,action)=>{
            state.loading=action.payload
        },
        setproductError:(state,action)=>{
            state.error=action.payload
        }
    }
    
})
export const {setproducts,setproductLoading,setproductError}=productSlice.actions;
export const selectproducts=(state)=>state.products.products;
export const selectproductLoading=(state)=>state.products.loading;
export const selectproductError=(state)=>state.products.error;
export default productSlice.reducer;