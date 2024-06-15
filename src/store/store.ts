import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ClientSlice from "./ClientSlice";
import ModalSlice from "./ModalSlice";
import ProductSlice from "./ProductSlice";
import VenteSlice from "./VenteSlice";
import FactureSlice from "./FactureSlice";

const store = configureStore({
  reducer: {
    clients: ClientSlice,
    produits: ProductSlice,
    ventes: VenteSlice,
    factures: FactureSlice,
    modals: ModalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
