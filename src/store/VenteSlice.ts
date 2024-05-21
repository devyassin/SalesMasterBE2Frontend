import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { StateManagementHelper } from "../helpers/StateManagementHelper ";

const apiService = new StateManagementHelper("ventes");

export const getAllVentes = apiService.getAll(true);
export const addVente = apiService.add();
export const removeVente = apiService.delete();
export const getOneVente = apiService.getOne();
export const updateOneVente = apiService.update();

const initialState: any = {
  data: {
    size: 0,
    ventes: [],
    page: 0,
  },

  vente: {
    clientName: "",
    status: "",
    total: "",
    telephone: "",
    ProduitQauntiteDao: [],
  },
  statusGetAllVentes: "",
  statusAddVente: "",
  statusRemoveVente: "",
  statusGetOneVente: "",
  statusUpdateOneVente: "",
  errorGetAllVentes: "",
  errorAddVente: "",
  errorRemoveVente: "",
  errorGetOneVente: "",
  errorUpdateOneVente: "",
};

const venteSlice = createSlice({
  name: "ventes",
  initialState,
  reducers: {
    handleGigForm: (
      state: any,
      { payload }: PayloadAction<{ name: any; value: any }>
    ) => {
      const { name, value } = payload;
      state.vente[name] = value;
    },
    clearVente: (state) => {
      state.vente = initialState.vente;
    },
    clearStatusVente: (state) => {
      state.statusAddVente = "";
      state.statusUpdateOneVente = "";
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllVentes.pending, (state) => {
        state.statusGetAllVentes = "loading";
      })
      .addCase(getAllVentes.fulfilled, (state: any, { payload }) => {
        state.statusGetAllVentes = "succeeded";
        state.data = payload;
      })
      .addCase(getAllVentes.rejected, (state, { payload }: any) => {
        state.statusGetAllVentes = "failed";
        state.errorGetAllVentes = payload.response.data.message;
      })
      .addCase(addVente.pending, (state) => {
        state.statusAddVente = "loading";
      })
      .addCase(addVente.fulfilled, (state: any) => {
        state.statusAddVente = "succeeded";
      })
      .addCase(addVente.rejected, (state, { payload }: any) => {
        state.statusAddVente = "failed";
        state.errorAddVente = payload.response.data.message;
      })
      .addCase(removeVente.pending, (state) => {
        state.statusRemoveVente = "loading";
      })
      .addCase(removeVente.fulfilled, (state: any, { payload }) => {
        state.statusRemoveVente = "succeeded";
        // const id = payload.clientId;
        // state.data.content = state.data.content.filter((client: any) => {
        //   return client.clientId !== id;
        // });
        state.data.totalElementsInTable -= 1;
      })
      .addCase(removeVente.rejected, (state, { payload }: any) => {
        state.statusRemoveVente = "failed";
        state.errorRemoveVente = payload.response.data.message;
      })
      .addCase(getOneVente.pending, (state) => {
        state.statusGetOneVente = "loading";
      })
      .addCase(getOneVente.fulfilled, (state: any, { payload }) => {
        state.statusGetOneVente = "succeeded";
        state.vente = payload;
      })
      .addCase(getOneVente.rejected, (state, { payload }: any) => {
        state.statusGetOneVente = "failed";
        state.errorGetOneVente = payload.response.data.message;
      })
      .addCase(updateOneVente.pending, (state) => {
        state.statusUpdateOneVente = "loading";
      })
      .addCase(updateOneVente.fulfilled, (state: any, { payload }) => {
        state.statusUpdateOneVente = "succeeded";
        // const index = state.data.content.findIndex(
        //   (client: any) => client.clientId === state.client.clientId
        // );
        // state.data.content[index] = state.client;
        state.vente = payload;
      })
      .addCase(updateOneVente.rejected, (state, { payload }: any) => {
        state.statusUpdateOneVente = "failed";
        state.errorUpdateOneVente = payload.response.data.message;
      });
  },
});

export const {
  NextPage,
  PreviousPage,
  GoToPage,
  handleGigForm,
  clearStatusVente,
  clearVente,
} = venteSlice.actions;
export default venteSlice.reducer;
