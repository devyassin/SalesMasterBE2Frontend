import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/endpoints";

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

const initialState: any = {
  data: {},
  token: "",
  user: {
    email: "",
    password: "",
  },
  statusLogin: "",
  errorLogin: "",
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
      });
  },
});

export const { handleLoginForm, clearUser, clearStatusAuth, logout } =
  authSlice.actions;
export default authSlice.reducer;
