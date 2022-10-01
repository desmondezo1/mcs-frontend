import { createSlice } from "@reduxjs/toolkit";
import { ScatterChart } from "recharts";

const initialState = {
  openCart: false,
  cart: [],
  totalPrice: 0,
  checkoutList: [],
  favouriteList: [],
  totalWeight: 0,
};

const mySlice = createSlice({
  name: "Reducer",
  initialState,
  reducers: {
    // the correct code that works
    closeCart: (state, action) => {
      state.openCart = action.payload;
      // state.openCart = false
    },
    updateCartList: (state, action) => {
      // update cart list

      console.log(state.cart.length);
      if (state.cart.length == 0) {
        state.cart.push(action.payload);
      } else {
        let index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index === -1) {
          state.cart.push(action.payload);
        } else {
          state.cart[index].quantity += action.payload.quantity;
        }
      }
      state.totalPrice =
        state.totalPrice + action.payload.price * action.payload.quantity;
    },

    updateFavouriteList: (state, action) => {
      if (state.favouriteList.length == 0) {
        state.favouriteList.push(action.payload);
      } else {
        let index = state.favouriteList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index === -1) {
          state.favouriteList.push(action.payload);
        }
      }
    },

    removeFavouriteList: (state, action) => {
      state.favouriteList = state.favouriteList.filter((e) => {
        return e.id != action.payload.id;
      });

      return state;
    },

    increaseQuantity: (state, action) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity + 1;
        }
        state.totalWeight=0;
        state.totalWeight += item.quantity * item.weight;
      });
    },
    decreaseQuantity: (state, action) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity - 1 ;
        }
        state.totalWeight =0;
        state.totalWeight += item.quantity * item.weight;
      });
    },
    calculateWeight: (state, action) => {
      state.cart.forEach((item) => {
        state.totalWeight += item.quantity * item.weight;
      })
   },

    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    updateCheckoutList(state, action) {
      state.checkoutList.push({ ...action.payload });
    },
    removeCartList: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    updateCartVisibility: (state, action) => {
      state.openCart = action.payload;
    },
  },
});

export const {
  updateCartList,
  increaseQuantity,
  closeCart,
  decreaseQuantity,
  calculateWeight,
  removeCartList,
  updateCheckoutList,
  updateTotalPrice,
  updateFavouriteList,
  updateCartVisibility,
  removeFavouriteList,
} = mySlice.actions;

export default mySlice.reducer;
