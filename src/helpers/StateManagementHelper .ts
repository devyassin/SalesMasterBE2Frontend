import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import { API_URL } from "../constants/endpoints";

const baseURL = `${API_URL}`;

export class ApiService {
  protected instance: AxiosInstance;
  protected resource: string;

  constructor(resource: string) {
    this.resource = resource;
    this.instance = axios.create({
      baseURL,
      headers: {
        "content-type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      (config: any) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }
  public get(routeName: string) {
    return this.instance.get(`${this.resource}/${routeName}`);
  }
 
}

export class StateManagementHelper extends ApiService {
  constructor(resource: string) {
    super(resource);
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

  getEmpty = () =>
    createAsyncThunk(
      `${this.resource}/getEmpty`,
      async ({ rejectWithValue }: any) => {
        try {
          const response = await this.instance.get(`/${this.resource}`);
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
  updatePatch = () =>
    createAsyncThunk(
      `${this.resource}/update`,
      async ([id, data]: any, { rejectWithValue }) => {
        try {
          const url = `/${this.resource}/${id}`;
          const response = await this.instance.patch(url, data);
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
  uploadFile = () =>
    createAsyncThunk(
      `${this.resource}/upload`,
      async (
        { file, nom, description, prix, quantiteEnStock }: any,
        { rejectWithValue }
      ) => {
        try {
          const formData = new FormData();
          formData.append("imageFile", file);

          const queryParams = new URLSearchParams({
            nom,
            description,
            prix: prix.toString(),
            quantiteEnStock: quantiteEnStock.toString(),
          }).toString();

          const response = await this.instance.post(
            `/${this.resource}?${queryParams}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error);
        }
      }
    );
}
