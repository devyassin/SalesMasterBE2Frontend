import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { StateManagementHelper } from "../helpers/StateManagementHelper ";
import { Produit } from "../types";

const apiService = new StateManagementHelper("produits");

export const getAllProducts = apiService.getAll(true);
// export const addProduct = apiService.add();
export const removeProduct = apiService.delete();
export const getOneProduct = apiService.getOne();
export const updateOneProduct = apiService.update();
export const addProduct = apiService.uploadFile();

const initialState: any = {
  data: {
    size: 0,
    produits: [],
    page: 0,
  },

  name: "",
  produit: {
    nom: "",
    description: "",
    prix: "",
    quantiteEnStock: "",
    image: "",
  },
  statusGetAllProducts: "",
  statusAddProducts: "",
  statusRemoveProducts: "",
  statusGetOneProducts: "",
  statusUpdateOneProducts: "",
  errorGetAllProducts: "",
  errorAddProducts: "",
  errorRemoveProducts: "",
  errorGetOneProducts: "",
  errorUpdateOneProducts: "",
};

const productSlice = createSlice({
  name: "produits",
  initialState,
  reducers: {
    handleGigForm: (
      state: any,
      { payload }: PayloadAction<{ name: any; value: any }>
    ) => {
      let { name, value } = payload;
      if (name == "prix" || name == "quantiteEnStock") {
        value = parseFloat(value);
      }
      state.produit[name] = value;
    },
    clearProduit: (state) => {
      state.produit = initialState.produit;
    },
    clearStatusProduit: (state) => {
      state.statusAddProducts = "";
      state.statusUpdateOneProducts = "";
      state.statusRemoveProducts = "";
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
    SearchProductByName: (state, { payload }) => {
      state.name = payload.name;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.statusGetAllProducts = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state: any, { payload }) => {
        state.statusGetAllProducts = "succeeded";
        state.data = payload;
      })
      .addCase(getAllProducts.rejected, (state, { payload }: any) => {
        state.statusGetAllProducts = "failed";
        state.errorGetAllProducts = payload.response.data.message;
      })
      .addCase(addProduct.pending, (state) => {
        state.statusAddProducts = "loading";
      })
      .addCase(addProduct.fulfilled, (state: any) => {
        state.statusAddProducts = "succeeded";
      })
      .addCase(addProduct.rejected, (state, { payload }: any) => {
        state.statusAddProducts = "failed";
        state.errorAddProducts = payload.response.data.message;
      })
      .addCase(removeProduct.pending, (state) => {
        state.statusRemoveClient = "loading";
      })
      .addCase(removeProduct.fulfilled, (state: any, { payload }) => {
        state.statusRemoveProducts = "succeeded";
        const id = payload.produitId;
        state.data.content = state.data.content.filter((produit: any) => {
          return produit.produitId !== id;
        });
        state.data.totalElementsInTable -= 1;
      })
      .addCase(removeProduct.rejected, (state, { payload }: any) => {
        state.statusRemoveProducts = "failed";
        state.errorRemoveProducts = payload.response.data.message;
      })
      .addCase(getOneProduct.pending, (state) => {
        state.statusGetOneProducts = "loading";
      })
      .addCase(getOneProduct.fulfilled, (state: any, { payload }) => {
        state.statusGetOneProducts = "succeeded";
        state.produit = payload;
      })
      .addCase(getOneProduct.rejected, (state, { payload }: any) => {
        state.statusGetOneProducts = "failed";
        state.errorGetOneProducts = payload.response.data.message;
      })
      .addCase(updateOneProduct.pending, (state) => {
        state.statusUpdateOneProducts = "loading";
      })
      .addCase(updateOneProduct.fulfilled, (state: any, { payload }) => {
        state.statusUpdateOneProducts = "succeeded";
        
      })
      .addCase(updateOneProduct.rejected, (state, { payload }: any) => {
        state.statusUpdateOneProducts = "failed";
        state.errorUpdateOneProducts = payload.response.data.message;
      });
  },
});

export const {
  NextPage,
  PreviousPage,
  GoToPage,
  handleGigForm,
  clearProduit,
  clearStatusProduit,
  SearchProductByName,
} = productSlice.actions;
export default productSlice.reducer;
