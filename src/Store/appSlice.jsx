import { createSlice } from "@reduxjs/toolkit";
export const appSlice=createSlice({
    name:"app",
    initialState:{
      courses:[],
      cart:{},
      wishlist:{}
    },
    reducers:{
        setCourseData:(state,action)=>{
            state.courses=action.payload
        },
        addToCart:(state,action)=>{
            state.cart[action.payload.id]={...action.payload}
        },
        removeFromCart:(state,action)=>{
            delete state.cart[action.payload.id]
        }
    }
})
export const {setCourseData,addToCart,removeFromCart}=appSlice.actions 
export default appSlice.reducer