const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    authUser:{},
    loading:false,
    error:false
}


const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        getAuth:(state,action)=>{
            state.authUser=action.payload;
        },
        setAuthLoading:(state,action)=>{
            state.loading=action.payload
        },
        setAuthError:(state,action)=>{
            state.error=action.payload
        }
    }
    
})
export const {getAuth,setAuthLoading,setAuthError}=authSlice.actions;
export const selectAuthUser=(state)=>state.auth.authUser;
export const selectAuthLoading=(state)=>state.auth.loading;
export const selectAuthError=(state)=>state.auth.error;
export default authSlice.reducer;