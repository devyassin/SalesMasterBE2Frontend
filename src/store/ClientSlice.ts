import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  current,
} from "@reduxjs/toolkit";

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
  async ({
    size,
    page,
    name,
  }: {
    size?: number;
    page?: number;
    name: string;
  }) => {
    try {
      let url = "/clients";
      const queryParams = [];

      if (size !== undefined) {
        queryParams.push(`size=${size}`);
      }

      if (page !== undefined) {
        queryParams.push(`page=${page}`);
      }

      if (name !== undefined) {
        queryParams.push(`name=${name}`);
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

export const addClient = apiService.add();
const initialState: any = {
  data: {
    size: 0,
    clients: [],
    page: 0,
  },
  name: "",
  client: {
    nom: "",
    email: "",
    adresse: "",
    telephone: "",
  },
  statusGetAllClients: "",
  statusAddClient: "",
  errorGetAllClients: "",
  errorAddClient: "",
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    handleGigForm: (
      state: any,
      { payload }: PayloadAction<{ name: any; value: any }>
    ) => {
      const { name, value } = payload;
      state.client[name] = value;
    },
    clearClient: (state) => {
      state.client = initialState.client;
    },
    clearStatusClient: (state) => {
      state.statusAddClient = "";
    },
    NextPage: (state) => {
      state.data.page += 1;
    },
    PreviousPage: (state) => {
      state.data.page -= 1;
    },
    GoToPage: (state, { payload }) => {
      state.data.page = payload.page;
    },
    SearchClientByName: (state, { payload }) => {
      state.name = payload.name;
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
      })
      .addCase(addClient.pending, (state) => {
        state.statusAddClient = "loading";
      })
      .addCase(addClient.fulfilled, (state: any, { payload }) => {
        state.statusAddClient = "succeeded";
      })
      .addCase(addClient.rejected, (state, { payload }: any) => {
        state.statusAddClient = "failed";
        state.errorAddClient = payload.response.data.message;
      });
  },
});

export const {
  NextPage,
  PreviousPage,
  GoToPage,
  handleGigForm,
  clearClient,
  clearStatusClient,
  SearchClientByName,
} = clientSlice.actions;
export default clientSlice.reducer;
