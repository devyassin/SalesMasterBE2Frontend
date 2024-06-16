import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { StateManagementHelper } from "../helpers/StateManagementHelper ";

const apiService = new StateManagementHelper("factures");

export const GetAllFactures = apiService.getAll(true);
export const AddFacture = apiService.add();
export const RemoveFacture = apiService.delete();
export const GetOneFacture = apiService.getOne();
export const UpdateOneFacture = apiService.update();

const initialState: any = {
  data: {
    size: 0,
    factures: [],
    page: 0,
  },

  name: "",
  facture: {},
  statusGetAllFactures: "",
  statusAddFacture: "",
  statusRemoveFacture: "",
  statusGetOneFacture: "",
  statusUpdateOneFacture: "",
  errorGetAllFactures: "",
  errorAddFacture: "",
  errorRemoveFacture: "",
  errorGetOneFacture: "",
  errorUpdateOneFacture: "",
};

const factureSlice = createSlice({
  name: "factures",
  initialState,
  reducers: {
    handleGigForm: (
      state: any,
      { payload }: PayloadAction<{ name: any; value: any }>
    ) => {
      const { name, value } = payload;
      state.facture[name] = value;
    },
    clearFacture: (state) => {
      state.facture = initialState.facture;
    },
    clearStatusFacture: (state) => {
      state.statusAddFacture = "";
      state.statusUpdateOneFacture = "";
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
    SearchFactureByName: (state, { payload }) => {
      state.name = payload.name;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAllFactures.pending, (state) => {
        state.statusGetAllFactures = "loading";
      })
      .addCase(GetAllFactures.fulfilled, (state: any, { payload }) => {
        state.statusGetAllFactures = "succeeded";
        state.data = payload;
      })
      .addCase(GetAllFactures.rejected, (state, { payload }: any) => {
        state.statusGetAllFactures = "failed";
        state.errorGetAllFactures = payload.response.data.message;
      })
      .addCase(AddFacture.pending, (state) => {
        state.statusAddFacture = "loading";
      })
      .addCase(AddFacture.fulfilled, (state: any) => {
        state.statusAddFacture = "succeeded";
      })
      .addCase(AddFacture.rejected, (state, { payload }: any) => {
        state.statusAddFacture = "failed";
        state.errorAddFacture = payload.response.data.message;
      })
      .addCase(RemoveFacture.pending, (state) => {
        state.statusRemoveFacture = "loading";
      })
      .addCase(RemoveFacture.fulfilled, (state: any, { payload }) => {
        state.statusRemoveFacture = "succeeded";
        const id = payload.factureId;
        state.data.content = state.data.content.filter((facture: any) => {
          return facture.factureId !== id;
        });
        state.data.totalElementsInTable -= 1;
      })
      .addCase(RemoveFacture.rejected, (state, { payload }: any) => {
        state.statusRemoveFacture = "failed";
        state.errorRemoveFacture = payload.response.data.message;
      })
      .addCase(GetOneFacture.pending, (state) => {
        state.statusGetOneFacture = "loading";
      })
      .addCase(GetOneFacture.fulfilled, (state: any, { payload }) => {
        state.statusGetOneFacture = "succeeded";
        state.facture = payload;
      })
      .addCase(GetOneFacture.rejected, (state, { payload }: any) => {
        state.statusGetOneFacture = "failed";
        state.errorGetOneFacture = payload.response.data.message;
      })
      .addCase(UpdateOneFacture.pending, (state) => {
        state.statusUpdateOneFacture = "loading";
      })
      .addCase(UpdateOneFacture.fulfilled, (state: any, { payload }) => {
        state.statusUpdateOneFacture = "succeeded";
        const index = state.data.content.findIndex(
          (facture: any) => facture.factureId === state.facture.factureId
        );
        state.data.content[index] = state.facture;
        state.facture = payload;
      })
      .addCase(UpdateOneFacture.rejected, (state, { payload }: any) => {
        state.statusUpdateOneFacture = "failed";
        state.errorUpdateOneFacture = payload.response.data.message;
      });
  },
});

export const {
  NextPage,
  PreviousPage,
  GoToPage,
  handleGigForm,
  clearFacture,
  clearStatusFacture,
  SearchFactureByName,
} = factureSlice.actions;
export default factureSlice.reducer;
