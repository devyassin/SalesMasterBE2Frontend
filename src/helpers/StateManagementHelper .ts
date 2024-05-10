import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import { API_URL } from "../constants/endpoints";

const baseURL = `${API_URL}`;
export class StateManagementHelper {
  private instance: AxiosInstance;
  private resource: string;

  constructor(resource: string) {
    this.resource = resource;
    this.instance = axios.create({
      baseURL,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  getAll = (pagination: boolean) =>
    createAsyncThunk(
      `${this.resource}/all`,
      async ([size, page, name]: any, { rejectWithValue }) => {
        try {
          let url = `/${this.resource}`;
          if (pagination) {
            const queryParams = [];
            if (size) {
              queryParams.push(`size=${size}`);
            }
            if (page) {
              queryParams.push(`page=${page}`);
            }
            if (name !== undefined) {
              queryParams.push(`name=${name}`);
            }
            url += `?${queryParams.join("&")}`;
          }

          const response = await this.instance.get(url);
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error);
        }
      }
    );

  add = () =>
    createAsyncThunk(
      `${this.resource}/add`,
      async (data: any, { rejectWithValue }) => {
        try {
          const response = await this.instance.post(`/${this.resource}`, data);
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error);
        }
      }
    );

  getOne = () =>
    createAsyncThunk(
      `${this.resource}/getone`,
      async (id: any, { rejectWithValue }) => {
        try {
          const response = await this.instance.get(`/${this.resource}/${id}`);
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error);
        }
      }
    );

  update = () =>
    createAsyncThunk(
      `${this.resource}/update`,
      async ([id, data]: any, { rejectWithValue }) => {
        try {
          const url = `/${this.resource}/${id}`;
          const response = await this.instance.put(url, data);
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error);
        }
      }
    );

  delete = () =>
    createAsyncThunk(
      `${this.resource}/delete`,
      async (id: any, { rejectWithValue }) => {
        try {
          const response = await this.instance.delete(
            `/${this.resource}/${id}`
          );
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error);
        }
      }
    );
}
