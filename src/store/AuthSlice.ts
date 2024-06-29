import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/endpoints";
import {
  ApiService,
  StateManagementHelper,
} from "../helpers/StateManagementHelper ";

const baseURL = `${API_URL}`;

export const Login = createAsyncThunk(
  `${baseURL}/auth/login`,
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

const apiService = new StateManagementHelper("auth/profile");
export const getCurrentUser = apiService.getEmpty();

const initialState: any = {
  data: {},
  currentUser: {},
  token: "",
  user: {
    email: "",
    password: "",
  },
  statusLogin: "",
  statusGetCurrentUser: "",
  errorLogin: "",
  errorGetCurrentUser: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLoginForm: (
      state: any,
      { payload }: PayloadAction<{ name: any; value: any }>
    ) => {
      const { name, value } = payload;
      state.user[name] = value;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
    clearStatusAuth: (state) => {
      state.statusLogin = "";
    },
    logout: (state) => {
      state.data = {};
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.statusLogin = "loading";
      })
      .addCase(Login.fulfilled, (state: any, { payload }) => {
        state.statusLogin = "succeeded";
        state.data = payload;
        state.token = payload.access_token;
        localStorage.setItem("token", payload.access_token);
      })
      .addCase(Login.rejected, (state, { payload }: any) => {
        state.statusLogin = "failed";
        state.errorLogin = payload.response.data.message;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.statusGetCurrentUser = "loading";
      })
      .addCase(getCurrentUser.fulfilled, (state: any, { payload }) => {
        state.statusGetCurrentUser = "succeeded";
        console.log(payload);
        state.currentUser = payload;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }: any) => {
        state.statusGetCurrentUser = "failed";
        console.log(payload)
        // state.errorGetCurrentUser = payload.response.data.message;
      });
  },
});

export const { handleLoginForm, clearUser, clearStatusAuth, logout } =
  authSlice.actions;
export default authSlice.reducer;
