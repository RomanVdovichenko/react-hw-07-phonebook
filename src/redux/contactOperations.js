import * as contactsApi from '../services/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const contact = await contactsApi.fetchContacts();
      return contact
    } catch (error) {
      return rejectWithValue(error)
    }
  })

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
    async (id, { rejectWithValue }) => {
     try {
       const contact = await contactsApi.deleteContact(id);
        return contact
      } catch (error) {
        return rejectWithValue(error)
      }
    }
)
  
export const addContact = createAsyncThunk(
  "contacts/addContact",
    async (text, { rejectWithValue }) => {
      try {
       const contact = await contactsApi.addContact(text);
        return contact
      } catch (error) {
        return rejectWithValue(error)
      }
    }
  )