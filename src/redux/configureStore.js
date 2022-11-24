import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/Missions';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
