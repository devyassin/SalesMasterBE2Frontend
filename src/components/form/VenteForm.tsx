import { useAppSelector } from "../../store/store";
import { Vente } from "../../types";
import FormModal from "./Modal";

const VenteForm = () => {
  const vente: Vente = useAppSelector((state) => state.ventes.vente);
  const formType: string = useAppSelector((state) => state.modals.formType);
  return (
    <FormModal
      yaxe="-70%"
      formHeader={`${formType === "add" ? "Ajouter Vente" : "Modifier Vente"}`}
    >
      dddd
    </FormModal>
  );
};

export default VenteForm;
