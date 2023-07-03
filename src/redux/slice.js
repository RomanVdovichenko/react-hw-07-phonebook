import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts, addContact } from './contactOperations';

const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
          return {...state, items: action.payload, isLoading: false}
        })
          .addCase(fetchContacts.pending, (state) => {
            return { ...state, isLoading: true, error: null }
          })
          .addCase(fetchContacts.rejected, (state, action) => {
            return { ...state, isLoading: false, error: action.payload }
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
            contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1);
          })
          .addCase(deleteContact.pending, (state) => {
            return {...state, isLoading: true}
          })
          .addCase(deleteContact.rejected, (state, action) => {
            return {...state, isLoading: false, error: action.payload}
          })
          .addCase(addContact.fulfilled, (state, action) => {
            return {...state, isLoading: false, error: null, items: [...state.items, action.payload]}
          })
          .addCase(addContact.pending, (state) => {
            return {...state, isLoading: true}
          })
          .addCase(addContact.rejected, (state, action) => {
            return {...state, isLoading: false, error: action.payload}
          })
    },
})

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    chengeFilter(state, action) {
      state = action.payload
      return state
    }
  }
})
export const filterReducer = filterSlice.reducer;
export const contactReducer = contactSlice.reducer;
export const { chengeFilter } = filterSlice.actions;
