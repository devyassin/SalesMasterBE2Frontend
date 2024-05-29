import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { Client, Produit, Vente } from "../../types";
import InputSelectOneChoice from "./InputSelectOneChoice";
import FormModal from "./Modal";
import { useEffect, useState } from "react";
import { getAllClients, getOneClient } from "../../store/ClientSlice";
import { getAllProducts } from "../../store/ProductSlice";
import InputSelectMultipleChoices from "./InputSelectMultipleChoices";
import GreenBtn from "../ui/button/GreenBtn";
import { handleGigForm } from "../../store/VenteSlice";

const VenteForm = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    let size = 100;
    dispatch(getAllClients([size]));
    dispatch(getAllProducts([size]));
  }, []);
  const clients: Client[] = useAppSelector(
    (state) => state.clients.data?.content || []
  );

  const produits: Produit[] = useAppSelector(
    (state) => state.produits.data?.content || []
  );

  const ClientNames = clients.map((client) => {
    return { value: client, label: client.nom };
  });

  const ProductNames = produits.map((produit) => {
    return { value: produit, label: produit.nom };
  });

  const StatusOptions = [
    { value: "NOUVELLE", label: "NOUVELLE" },
    { value: "ENCOURS", label: "ENCOURS" },
    { value: "COMPLETEE", label: "COMPLETEE" },
  ];
  const vente: Vente = useAppSelector((state) => state.ventes.vente);
  const formType: string = useAppSelector((state) => state.modals.formType);
  const [isFirstPart, setFirtsPart] = useState<boolean>(true);
  const handleSelectClient = (value: string | Object) => {
    dispatch(handleGigForm({ name: "client", value: value }));
  };

  const handleSelectStatus = (value: string | Object) => {
    dispatch(handleGigForm({ name: "status", value: value }));
  };

  const handleSelectProducts = (value: string | Object) => {
    dispatch(handleGigForm({ name: "ProduitQauntiteDao", value: value }));
  };
  return (
    <FormModal
      yaxe="-70%"
      formHeader={`${formType === "add" ? "Ajouter Vente" : "Modifier Vente"}`}
    >
      <form onSubmit={formType === "add" ? "" : ""}>
        {isFirstPart ? (
          <div>
            <div className="grid grid-cols-2 gap-8">
              <InputSelectOneChoice
                options={ClientNames}
                handleSelect={handleSelectClient}
                defaultValue={{
                  value: "Nom Client",
                  label: "Nom Client",
                }}
              />
              <InputSelectOneChoice
                handleSelect={handleSelectStatus}
                options={StatusOptions}
                defaultValue={{
                  value: "Status",
                  label: "Status",
                }}
              />
              <InputSelectMultipleChoices
                handleSelect={handleSelectProducts}
                customStyles="col-span-2"
                options={ProductNames}
              />
            </div>

            <div className="pt-10 w-fit" onClick={() => setFirtsPart(false)}>
              <GreenBtn
                text={`${formType === "add" ? "Next" : "Ajouter"}`}
                customClasses="py-2 px-8"
              />
            </div>
          </div>
        ) : (
          <h1>hello</h1>
        )}
      </form>
    </FormModal>
  );
};

export default VenteForm;
