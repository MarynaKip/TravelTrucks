import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';


export const getById = createAsyncThunk(
  'catalog/getById',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/${camperId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFiltered = createAsyncThunk(
  'catalog/fetchFiltered',
  async ({filters, pagination}, thunkAPI) => {
    try {
      const bodyTypeMap = {
        "Van": "panelTruck",
        "Fully Integrated": "fullyIntegrated",
        "Alcove": "alcove",
      }

      const response = await axios.get('', {
        params: {
          ...(filters.location && { location: filters.location }),
          ...(filters.bodyType && { form: bodyTypeMap[filters.bodyType]}),
          ...(filters.features.AC && { AC: true }),
          ...(filters.features.Bathroom && { bathroom: true }),
          ...(filters.features.Kitchen && { kitchen: true }),
          ...(filters.features.TV && { TV: true }),
          page: pagination.page,
          limit: pagination.limit,
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
