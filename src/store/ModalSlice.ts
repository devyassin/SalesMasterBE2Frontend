import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  overlayVisibility: false,
  FormModalVisibility: false,
  formType: "add",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showoverlay: (state) => {
      state.overlayVisibility = !state.overlayVisibility;
    },
    showFormModal: (state) => {
      state.FormModalVisibility = !state.FormModalVisibility;
    },
  
    SetFormType: (state, { payload }) => {
      state.formType = payload.formType;
    },
  },
});

export const {
  showoverlay,
  showFormModal,
  SetFormType,
} = modalSlice.actions;
export default modalSlice.reducer;
