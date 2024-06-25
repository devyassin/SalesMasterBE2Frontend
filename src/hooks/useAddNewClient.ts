import { FormEvent, useEffect } from "react";
import { ToastLoading, Toastfailed, Toastsuccess } from "../helpers/Toasts";
import { zodHandllingErrors } from "../helpers/zodHandllingErrors ";
import { useAppSelector } from "../store/store";
import {
  addClient,
  clearClient,
  clearStatusClient,
} from "../store/ClientSlice";
import { useDispatch } from "react-redux";
import { ClientValidation } from "../lib/validation/ClientValidation";

const useAddNewClient = () => {
  const dispatch = useDispatch<any>();
  const { client, statusAddClient, errorAddClient } = useAppSelector(
    (state) => state.clients
  );

  useEffect(() => {
    if (statusAddClient === "succeeded") {
      Toastsuccess("client added successfully !");
      setTimeout(() => {
        dispatch(clearClient());
        dispatch(clearStatusClient());
      }, 1500);
    }

    if (statusAddClient === "failed") {
      Toastfailed(errorAddClient);
    }

    if (statusAddClient === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusAddClient]);

  const addNewClient = (e: FormEvent) => {
    e.preventDefault();
    if (zodHandllingErrors(ClientValidation, client)) {
      dispatch(addClient(client));
    }
  };
  return { addNewClient };
};

export default useAddNewClient;
