import { FormEvent, useEffect } from "react";
import { ToastLoading, Toastfailed, Toastsuccess } from "../helpers/Toasts";
import { zodHandllingErrors } from "../helpers/zodHandllingErrors ";
import { useAppSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { VenteValidation } from "../lib/validation/ClientValidation";
import { clearStatusVente, addVente } from "../store/VenteSlice";
import { showFormModal, showoverlay } from "../store/ModalSlice";

const useAddNewVente = () => {
  const dispatch = useDispatch<any>();
  const { vente, statusAddVente, errorAddVente } = useAppSelector(
    (state) => state.ventes
  );

  useEffect(() => {
    if (statusAddVente === "succeeded") {
      Toastsuccess("vente Added successfully !");
      setTimeout(() => {
        dispatch(clearStatusVente());
        dispatch(showFormModal());
        dispatch(showoverlay());
      }, 1500);
    }

    if (statusAddVente === "failed") {
      Toastfailed(errorAddVente);
    }

    if (statusAddVente === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusAddVente]);

  const addNewVente = () => {
    if (zodHandllingErrors(VenteValidation, vente)) {
      console.log(vente);
      dispatch(addVente(vente));
    }
  };
  return { addNewVente };
};

export default useAddNewVente;
