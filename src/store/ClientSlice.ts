import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { StateManagementHelper } from "../helpers/StateManagementHelper ";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../constants/endpoints";

const apiService = new StateManagementHelper("clients");
const baseURL = `${API_URL}`;
const instance = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
});

export const getAllClients = createAsyncThunk(
  "clients/all",
  async ({ size, page }: { size?: number; page?: number }) => {
    try {
      let url = "/clients";
      const queryParams = [];

      if (size !== undefined) {
        queryParams.push(`size=${size}`);
      }

      if (page !== undefined) {
        queryParams.push(`page=${page}`);
      }

      if (queryParams.length > 0) {
        url += "?" + queryParams.join("&");
      }

      const response = await instance.get(url);
      return response.data;
    } catch (error: any) {
      return Promise.reject(new Error(error.message));
    }
  }
);

const initialState: any = {
  data: {
    size: 0,
    clients: [],
    page: 0,
  },

  statusGetAllClients: "",
  errorGetAllClients: "",
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    NextPage: (state) => {
      state.data.page += 1;
    },
    PreviousPage: (state) => {
      state.data.page -= 1;
    },
    GoToPage: (state, { payload }) => {
      state.data.page = payload.page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllClients.pending, (state) => {
        state.statusGetAllClients = "loading";
      })
      .addCase(getAllClients.fulfilled, (state: any, { payload }) => {
        state.statusGetAllClients = "succeeded";
        state.data = payload;
      })
      .addCase(getAllClients.rejected, (state, { payload }: any) => {
        state.statusGetAllClients = "failed";
        state.errorGetAllClients = payload.response.data.message;
      });
  },
});

export const { NextPage, PreviousPage, GoToPage } = clientSlice.actions;
export default clientSlice.reducer;
