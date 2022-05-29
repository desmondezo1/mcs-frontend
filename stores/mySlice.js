import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 openCart: false,
 cart: [],
 totalPrice: 0,
 checkoutList: []
}


const mySlice = createSlice({
   name: 'Reducer',
   initialState,
   reducers : {
      updateCartList: (state, action) => {
            if ( state.cart.length == 0) {
              state.cart.push(action.payload)
            }else{
              state.cart.filter(val => {
                if(val.id !== action.payload.id){
                  return state.cart.push(action.payload);
                }else if(val.id == action.payload.id){
                  return val.quantity++
                }

              });
              // state.cart.forEach((item) => {
              //   if (item.id === action.payload.id) {
              //     item.quantity++;
              //   }else{
              //     state.cart.push(action.payload)
              //   }
              // });
            }
           
      },
      increaseQuantity: (state, action) => {
        state.cart.forEach((item) => {
          if (item.id === action.payload.id) {
            item.quantity++;
          }
        });
      },
      decreaseQuantity: (state, action) => {
        state.cart.forEach((item) => {
          if (item.id === action.payload.id) {
            item.quantity--;
          }
        });
      },
      updateTotalPrice: (state, action) => {
        state.totalPrice = action.payload;
      },
      updateCheckoutList(state, action){
        state.checkoutList.push({...action.payload})
     },
     removeCartList: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id)
     },
     updateCartVisibility: (state, action) => {
      state.openCart = action.payload;
     }
   }
   
})


export const { updateCartList, increaseQuantity, decreaseQuantity, removeCartList, updateCheckoutList, updateTotalPrice, updateCartVisibility } = mySlice.actions


export default mySlice.reducer;
