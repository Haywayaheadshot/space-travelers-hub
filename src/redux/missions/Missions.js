import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_MISSIONS = 'SPACE-TRAVELERS-HUB/src/redux/missions/getMissons';

const initialState = [];

const getMissionsApi = 'https://api.spacexdata.com/v3/missions';

// action creators for display, join and leave missions

export const getMissons = createAsyncThunk(
  GET_MISSIONS, async () => {
    const response = await fetch(getMissionsApi);
    const missions = await response.json();
    const newData = Object.keys(missions).map((id) => ({
      id: missions[id].mission_id,
      missionName: missions[id].mission_name,
      description: missions[id].description,
      reserved: false,
    }));
    return newData;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reservedMissions(state, action) {
      const newState = state.map((index) => {
        if (action.payload !== index.id) {
          return { ...index };
        }
        return { ...index, reserved: true };
      });
      return newState;
    },
    leaveMission(state, action) {
      const newState = state.map((index) => {
        if (action.payload !== index.id) {
          return { ...index };
        }
        return { ...index, reserved: false };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissons.fulfilled, (_, action) => action.payload);
    builder.addCase(getMissons.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(getMissons.pending, (_, action) => action.payload);
  },
});

export const { reservedMissions, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
