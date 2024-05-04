import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ClientSlice from "./ClientSlice";
import ModalSlice from "./ModalSlice";

const store = configureStore({
  reducer: {
    clients: ClientSlice,
    modals: ModalSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
