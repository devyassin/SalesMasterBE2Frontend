import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  overlayVisibility: false,
  clientFormModalVisibility: false,
  formType: "add",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showoverlay: (state) => {
      state.overlayVisibility = !state.overlayVisibility;
    },
    showClientFormModal: (state) => {
      state.clientFormModalVisibility = !state.clientFormModalVisibility;
    },
    SetFormType: (state, { payload }) => {
      state.formType = payload.formType;
    },
  },
});

export const { showoverlay, showClientFormModal, SetFormType } =
  modalSlice.actions;
export default modalSlice.reducer;
