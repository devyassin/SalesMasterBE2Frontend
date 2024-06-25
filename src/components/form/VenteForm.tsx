import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { Client, Produit, ProduitQauntite, Vente } from "../../types";
import InputSelectOneChoice from "./InputSelectOneChoice";
import FormModal from "./Modal";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getAllClients, getOneClient } from "../../store/ClientSlice";
import { getAllProducts } from "../../store/ProductSlice";
import InputSelectMultipleChoices from "./InputSelectMultipleChoices";
import GreenBtn from "../ui/button/GreenBtn";
import { handleGigForm, handleQuantiteProduct } from "../../store/VenteSlice";
import Thead from "../table/Thead";
import useAddNewVente from "../../hooks/useAddNewVente";

const VenteForm = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    let size = 100;
    dispatch(getAllClients([size]));
    dispatch(getAllProducts([size]));
  }, [dispatch]);

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

  const { addNewVente } = useAddNewVente();

  const handleSelectClient = (value: string | Object) => {
    dispatch(handleGigForm({ name: "client", value: value }));
  };

  const handleSelectStatus = (value: string | Object) => {
    dispatch(handleGigForm({ name: "statut", value: value }));
  };

  const handleSelectProducts = (value: string | Object) => {
    dispatch(handleGigForm({ name: "produitQauntiteDaos", value: value }));
  };

  const handleChange = (
    id: number,
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let { name, value }: any = event.target;
    dispatch(handleQuantiteProduct({ id, name, value }));
  };
  return (
    <FormModal
      yaxe="-70%"
      formHeader={`${formType === "add" ? "Ajouter Vente" : "Modifier Vente"}`}
    >
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          addNewVente();
        }}
      >
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
          <div className="relative mt-14 overflow-x-auto scrollbar-hide shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-[#a0aec0]">
              <Thead feilds={["Produit", "Quantité"]} />
              <tbody className="overflow-y-scroll scroll scroll-smooth little-scrollbar-global">
                {vente?.produitQauntiteDaos?.map(
                  (produitQuant: ProduitQauntite, index: number) => (
                    <tr
                      key={index}
                      className="border-b bg-[#2d3748] border-[#4a5568] hover:bg-[#718096]"
                    >
                      <th className="px-6 py-4 font-medium text-white">
                        {produitQuant.produit.nom || "Unknown Product Name"}
                      </th>
                      <th className="px-6 py-4 font-medium text-white">
                        <input
                          value={produitQuant.quantite}
                          type="number"
                          name="produitQuant"
                          className="input-creategig focus:bg-dark-6 outline-none font-tajwal px-[28px] pt-[8px] pb-[8px] text-white"
                          onChange={(event) =>
                            handleChange(produitQuant.produit.produitId, event)
                          }
                        />
                      </th>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <div className="flex items-center pt-10 space-x-6">
              <div className=" w-fit" onClick={() => setFirtsPart(true)}>
                <GreenBtn
                  text={`${formType === "add" ? "Previous" : "Ajouter"}`}
                  customClasses="py-2 px-8"
                />
              </div>

              <GreenBtn
                text={`${formType === "add" ? "Ajouter" : "Modifer"}`}
                customClasses="py-2 px-8"
              />
            </div>
          </div>
        )}
      </form>
    </FormModal>
  );
};

export default VenteForm;
