import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: {
    Vehicle: {},
    loading: false,
    error: null,
  },
  reducers: {
    fetchVehicleStart: (state) => {
      state.loading = true;
      state.downloadLoading = true;
      state.error = null;
    },
    fetchVehicleSuccess: (state, action) => {
      state.loading = false;
      state.Vehicle = action.payload;
    },
    fetchMoreVehicleSuccess: (state, action) => {
      state.loading = false;
      state.Vehicle.models = [
        ...state.Vehicle.models,
        ...action.payload.models,
      ];
      state.Vehicle.lastVisible = action.payload.lastVisible;
      state.Vehicle.totalApp = action.payload.totalApp;
    },
    fetchVehicleFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateAdLimit: (state, action) => {
      const { id, newLimit, limitOff } = action.payload;
      const item = state.Vehicle.models.find(
        (item) => item.TransactionId === id
      );
      if (item) {
        item.enquiryLimit = newLimit;
        item.limitoff = limitOff;
      }
    },
    toggleClearVehicle: (state) => {
      state.Vehicle = {};
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchVehicleStart,
  fetchVehicleSuccess,
  fetchMoreVehicleSuccess,
  fetchVehicleFailure,
  updateAdLimit,
  toggleClearVehicle,
} = vehicleSlice.actions;
export default vehicleSlice.reducer;
