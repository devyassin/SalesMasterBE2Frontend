import { useParams } from "react-router-dom";
import Stepper from "../../components/ui/Stepper";
import { useEffect } from "react";
import { Client, Produit, ProduitQauntite, Status, Vente } from "../../types";
import { useAppSelector } from "../../store/store";
import CardInfoDetail from "../../components/ui/cards/CardInfoDetail";
import { useDispatch } from "react-redux";
import { getOneVente } from "../../store/VenteSlice";
import ProductCards from "../../components/inventaire/ProductCards";
import ProductForm from "../../components/form/ProductForm";
import GreenBtn from "../../components/ui/button/GreenBtn";
import { showoverlay } from "../../store/ModalSlice";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import useGenerateFacture from "../../hooks/useGenerateFacture";

const VenteDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch<any>();

  const { generateFacture } = useGenerateFacture();

  useEffect(() => {
    dispatch(getOneVente([id]));
  }, []);

  const { statusUpdateOneVente } = useAppSelector((state) => state.ventes);
  const client: Client = useAppSelector((state) => state.ventes.vente.client);
  const { statut, dateVente, total, produitQauntiteDaos }: Vente =
    useAppSelector((state) => state.ventes.vente);
  const productFormModalVisibility: any = useAppSelector(
    (state) => state.modals.FormModalVisibility
  );
  // Extract the produit array from produitQauntiteDaos
  const produits: Produit[] =
    produitQauntiteDaos?.map((pq: ProduitQauntite) => pq.produit) || [];

  const quantites: number[] =
    produitQauntiteDaos?.map((pq: ProduitQauntite) => pq.quantite) || [];

  const clientData = [
    { label: "Nom", value: client.nom },
    { label: "Email address", value: client.email },
    { label: "Phone number", value: client.telephone },
    { label: "Address", value: client.adresse },
  ];

  const venteData = [
    { label: "Statut", value: statut },
    { label: "Date de vente", value: dateVente },
    {
      label: "Total",
      value: typeof total === "number" ? total.toFixed(2) + " DH" : "N/A",
    },
    { label: "Total Produits", value: produitQauntiteDaos?.length },
  ];

  return (
    <div className="overflow-y-scroll scroll scroll-smooth scrollbar-hide h-[100vh]">
      {statut !== Status.COMPLETEE && (
        <div
          onClick={() => {
            dispatch(showoverlay());
            generateFacture();
          }}
          className="flex justify-end"
        >
          <GreenBtn text="Générer une facture" customClasses="py-2" />
        </div>
      )}
      <div className="">
        <Stepper status={statut} />

        <LoadingSpinner
          status={statusUpdateOneVente}
          customClasses="w-[75px] h-[75px]"
        />

        <div className="grid grid-cols-2 gap-x-8 mt-20">
          <CardInfoDetail title="Client" data={clientData} />
          <CardInfoDetail title="Vente" data={venteData} />
          <div className="col-span-2 my-10">
            <h1 className="text-3xl font-tajwal pb-4 text-light-white-2">
              Produits
            </h1>
            {productFormModalVisibility && <ProductForm venteDetails={true} />}
            <ProductCards
              quantites={quantites}
              produits={produits}
              venteDetails={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenteDetails;
