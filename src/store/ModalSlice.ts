import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  overlayVisibility: false,
  clientFormModalVisibility: false,
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
  },
});

export const { showoverlay, showClientFormModal } = modalSlice.actions;
export default modalSlice.reducer;
