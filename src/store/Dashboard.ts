import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiService } from "../helpers/StateManagementHelper ";

const apiService = new ApiService("dashboard/cards");

export const getDashboardCards = createAsyncThunk(
  "dashboard/fetchCards",
  async (_, thunkAPI) => {
    try {
      const response = await apiService.get();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: any = {
  data: {},
  cards: {},
  statusGetAllCardsData: "",
  errorAllCardsData: "",
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
        state.cards=payload;
      })
      .addCase(getDashboardCards.rejected, (state, { payload }: any) => {
        state.statusGetAllCardsData = "failed";
        state.errorAllCardsData = payload.response.data.message;
      });
  },
});

export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;
