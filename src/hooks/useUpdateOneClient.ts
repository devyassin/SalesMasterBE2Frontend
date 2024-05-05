import { FormEvent, useEffect } from "react";
import { ToastLoading, Toastfailed, Toastsuccess } from "../helpers/Toasts";
import { zodHandllingErrors } from "../helpers/zodHandllingErrors ";
import { useAppSelector } from "../store/store";
import { updateOneClient, clearStatusClient } from "../store/ClientSlice";
import { useDispatch } from "react-redux";
import { ClientValidation } from "../lib/validation/ClientValidation";

const useUpdateOneClient = () => {
  const dispatch = useDispatch<any>();
  const { client, statusUpdateOneClient, errorUpdateOneClient } =
    useAppSelector((state) => state.clients);

  useEffect(() => {
    if (statusUpdateOneClient === "succeeded") {
      Toastsuccess("client Updated successfully !");
      setTimeout(() => {
        dispatch(clearStatusClient());
      }, 1500);
    }

    if (statusUpdateOneClient === "failed") {
      Toastfailed(errorUpdateOneClient);
    }

    if (statusUpdateOneClient === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusUpdateOneClient]);

  const updateClient = (e: FormEvent) => {
    e.preventDefault();
    if (zodHandllingErrors(ClientValidation, client)) {
      let id = client.clientId;
      console.log(id);
      console.log(client);
      dispatch(updateOneClient([id, client]));
    }
  };
  return { updateClient };
};

export default useUpdateOneClient;
