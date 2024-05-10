import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ClientSlice from "./ClientSlice";
import ModalSlice from "./ModalSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    clients: ClientSlice,
    produits: ProductSlice,
    modals: ModalSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
