const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    user:{},
    loading:false,
    error:false

}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        getUser:(state,action)=>{
            state.userUser=action.payload;
        },
        setUserLoading:(state,action)=>{
            state.loading=action.payload
        },
        setUserError:(state,action)=>{
            state.error=action.payload
        }
    }
    
})
export const {getuser,setuserLoading,setuserError}=userSlice.actions;
export const selectGetUser=(state)=>state.user.user;
export const selectUserLoading=(state)=>state.user.loading;
export const selectUserError=(state)=>state.user.error;
export default userSlice.reducer;