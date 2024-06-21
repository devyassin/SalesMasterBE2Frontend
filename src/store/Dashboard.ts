import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiService } from "../helpers/StateManagementHelper ";

const apiService = new ApiService("dashboard");

export const getDashboardCards = createAsyncThunk(
  "dashboard/fetchCards",
  async (_, thunkAPI) => {
    try {
      const response = await apiService.get("cards");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getVenteCountsStats = createAsyncThunk(
  "dashboard/fetchedVenteCountsStats",
  async (_, thunkAPI) => {
    try {
      const response = await apiService.get("ventes_count_stats");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: any = {
  data: {},
  cards: {},
  ventesCountes: {},
  statusGetAllCardsData: "",
  statusGetventesCountes: "",
  errorAllCardsData: "",
  errorGetventesCountes: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardCards.pending, (state) => {
        state.statusGetAllCardsData = "loading";
      })
      .addCase(getDashboardCards.fulfilled, (state: any, { payload }) => {
        state.statusGetAllCardsData = "succeeded";
        state.cards = payload;
      })
      .addCase(getDashboardCards.rejected, (state, { payload }: any) => {
        state.statusGetAllCardsData = "failed";
        state.errorAllCardsData = payload.response.data.message;
      })
      .addCase(getVenteCountsStats.pending, (state) => {
        state.statusGetventesCountes = "loading";
      })
      .addCase(getVenteCountsStats.fulfilled, (state: any, { payload }) => {
        state.statusGetventesCountes = "succeeded";
        state.ventesCountes = payload;
      })
      .addCase(getVenteCountsStats.rejected, (state, { payload }: any) => {
        state.statusGetventesCountes = "failed";
        state.errorGetventesCountes = payload.response.data.message;
      });
  },
});

export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;
