import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetOneFacture } from "../../store/FactureSlice";
import { useAppSelector } from "../../store/store";
import { Client, Facture, ProduitQauntite, Vente } from "../../types";
import { getOneVente } from "../../store/VenteSlice";
import CardInfoDetail from "../../components/ui/cards/CardInfoDetail";
import { ClientsHeaderIcon, bgFacture } from "../../assets";
import { useRef } from "react";
import ReactPrint from "react-to-print";
import HeaderTitle from "../../components/header/HeaderTitle";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import GreenBtn from "../../components/ui/button/GreenBtn";
import Header from "../../components/header/Header";
import HeaderLogo from "../../components/ui/HeaderLogo";

type Props = {};

const FacturationDetails = (props: Props) => {
  const ref: any = useRef();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (id) {
      dispatch(GetOneFacture(id));
    }
  }, [id, dispatch]);

  const facture: Facture = useAppSelector((state) => state.factures.facture);
  const vente: Vente = useAppSelector((state) => state.ventes.vente);
  const client: Client = useAppSelector((state) => state.ventes.vente?.client);

  useEffect(() => {
    if (facture?.vente?.venteId) {
      dispatch(getOneVente(facture.vente.venteId));
    }
  }, [facture, dispatch]);

  if (!facture || !vente || !client) {
    return <div>Loading...</div>;
  }
  const produitsName: string[] =
    vente.produitQauntiteDaos?.map((pq: ProduitQauntite) => pq.produit.nom) ||
    [];

  const produitsPrices: number[] =
    vente.produitQauntiteDaos?.map((pq: ProduitQauntite) => pq.produit.prix) ||
    [];

  const quantites: number[] =
    vente.produitQauntiteDaos?.map((pq: ProduitQauntite) => pq.quantite) || [];

  const clientData = [
    { label: "Nom", value: client.nom },
    { label: "Email address", value: client.email },
    { label: "Phone number", value: client.telephone },
    { label: "Address", value: client.adresse },
  ];

  const venteData = [
    { label: "Statut", value: vente.statut },
    { label: "Date de vente", value: vente.dateVente },
    {
      label: "Total",
      value:
        typeof vente.total === "number"
          ? vente.total.toFixed(2) + " DH"
          : "N/A",
    },
    { label: "Total Produits", value: vente.produitQauntiteDaos?.length },
  ];

  const factureData = [
    { label: "Date Facturation", value: facture.dateFacturation },
    {
      label: "Montant Total",
      value:
        typeof facture.montantTotal === "number"
          ? facture.montantTotal.toFixed(2) + " DH"
          : "N/A",
    },
  ];

  produitsName.forEach((name, index) => {
    const price = produitsPrices[index];
    const quantite = quantites[index];
    factureData.push({
      label: `Produit ${index + 1}`,
      value: `Nom: ${name}, Prix: ${price} DH, Quantité: ${quantite}`,
    });
  });

  const entrepriseData = [
    { label: "Nom Entreprise", value: "Super Sales" },
    {
      label: "Adresse",
      value: "Casablanca , maarif rue 25",
    },
    {
      label: "Employee",
      value: "yassine lamouadden",
    },
    {
      label: "Type Paiement",
      value: "espèce",
    },
  ];

  return (
    <div className="overflow-y-scroll scroll-smooth scrollbar-hide h-full">
      <div>
        <div className="flex items-center justify-between mb-8">
          <HeaderTitle title="Imprimer Facture" />
          <Link to="/facturation">
            <IoArrowBackCircleSharp
              size={50}
              className="cursor-pointer text-blue-400 hover:opacity-80 duration-150"
            />
          </Link>
        </div>
        <div
          ref={ref}
          className="p-4 rounded-lg"
          style={{
            backgroundImage: `url(${bgFacture})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-between">
            <h1
              className=" text-4xl shadow-sm text-white 
            bg-blue-dark-5 rounded-lg px-2 mb-4 font-tajwal"
            >
              Facture
            </h1>
          
              <HeaderLogo />
           
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 mt-4">
            <CardInfoDetail
              customClassStyleForTitle="text-dark-2 font-sans text-[36px]"
              title="Client"
              data={clientData}
            />
            <CardInfoDetail
              customClassStyleForTitle="text-dark-2 font-sans text-[36px]"
              title="Vente"
              data={venteData}
            />
            <CardInfoDetail
              customClassStyleForTitle="text-dark-2 font-sans text-[36px]"
              title="Reçu"
              data={factureData}
            />
            <CardInfoDetail
              customClassStyleForTitle="text-dark-2 font-sans text-[36px]"
              title="Entreprise"
              data={entrepriseData}
            />
          </div>
        </div>
      </div>
      <ReactPrint
        trigger={() => (
          <button
            className={`flex bg-light-green text-[#000] font-semibold px-4 
              items-center  justify-center  py-2 mt-2
         
            cursor-pointer hover:opacity-90 duration-150 ease-in-out rounded-[7px]  font-tajwal `}
          >
            <div>Imprimer</div>
          </button>
        )}
        content={() => ref.current}
      />
    </div>
  );
};

export default FacturationDetails;
