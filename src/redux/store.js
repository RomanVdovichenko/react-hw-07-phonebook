import { configureStore } from '@reduxjs/toolkit';
import  {filterReducer, contactReducer} from './slice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer
  },
  
})


