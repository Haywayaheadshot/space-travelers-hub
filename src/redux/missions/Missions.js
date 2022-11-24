import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_MISSIONS = 'SPACE-TRAVELERS-HUB/src/redux/missions/getMissons';

const initialState = [];

const getMissionsApi = 'https://api.spacexdata.com/v3/missions';

// action creators for display, join and leave missions

export const getMissons = createAsyncThunk(
  GET_MISSIONS, () => axios.get(getMissionsApi).then((res) => {
    const missions = res.data;
    return missions;
  }),
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMissons.fulfilled, (_, action) => action.payload);
    builder.addCase(getMissons.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(getMissons.pending, (_, action) => action.payload);
  },
});

export default missionsSlice.reducer;
