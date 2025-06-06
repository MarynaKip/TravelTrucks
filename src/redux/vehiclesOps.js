import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchContacts = createAsyncThunk(
  'catalog/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/campers');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (contact, thunkAPI) => {
//       try {
//         const response = await axios.post('/contacts', contact);
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
//   );

//   export const deleteContact = createAsyncThunk(
//     'catalog/get',
//     async (contactId, thunkAPI) => {
//       try {
//         const response = await axios.delete(`/campers/${camperId}`);
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
//   );