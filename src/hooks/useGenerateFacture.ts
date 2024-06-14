import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/store";
import { useEffect } from "react";
import { clearStatusVente, updateOneVente } from "../store/VenteSlice";
import { showoverlay } from "../store/ModalSlice";
import { Toastfailed } from "../helpers/Toasts";
import { useNavigate } from "react-router-dom";

const useGenerateFacture = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { vente, statusUpdateOneVente, errorUpdateOneVente } = useAppSelector(
    (state) => state.ventes
  );

  useEffect(() => {
    if (statusUpdateOneVente === "succeeded") {
      setTimeout(() => {
        dispatch(clearStatusVente());
        dispatch(showoverlay());
        navigate("/facturation");
      }, 1500);
    }

    if (statusUpdateOneVente === "failed") {
      Toastfailed(errorUpdateOneVente);
    }
  }, [statusUpdateOneVente]);
  const generateFacture = () => {
    let id = vente.venteId;
    console.log(id);
    dispatch(
      updateOneVente([
        id,
        {
          statut: "COMPLETEE",
        },
      ])
    );
  };
  return { generateFacture };
};

export default useGenerateFacture;
