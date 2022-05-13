import  { configureStore,combineReducers } from '@reduxjs/toolkit';
import mySlice from './mySlice';


 const store = configureStore({
    reducer: {
      mySlice,
    },
  });

export default store