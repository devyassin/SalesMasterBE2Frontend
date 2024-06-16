import { useDispatch } from "react-redux";
import { FactureHeaderIcon } from "../../assets";
import Header from "../../components/header/Header";
import { useAppSelector } from "../../store/store";
import { Facture } from "../../types";
import { useEffect } from "react";
import {
  GetAllFactures,
  GetOneFacture,
  RemoveFacture,
  SearchFactureByName,
} from "../../store/FactureSlice";
import TableFunctions from "../../components/table/TableFunctions";
import Table from "../../components/table/Table";
import { tableFactureFields } from "../../constants/TableConstants";
import { useNavigate } from "react-router";

const Facturation = () => {
  const dispatch = useDispatch<any>();
  const factures: Facture[] = useAppSelector(
    (state) => state.factures.data.content
  );
  const { page, totalPages, totalElementsInTable } = useAppSelector(
    (state) => state.factures.data
  );
  const name = useAppSelector((state) => state.factures.name);
  const statusGetAllFactures = useAppSelector(
    (state) => state.factures.statusGetAllFactures
  );

  useEffect(() => {
    let size = 10;
    dispatch(GetAllFactures([size, page, name]));
  }, [page, name]);
  const removeVenteField = (facture: Facture) => {
    const { vente, ...rest } = facture;
    return rest;
  };
  // Process the factures data to remove 'vente' field
  const processedFactures = factures ? factures.map(removeVenteField) : [];
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <Header
        image={FactureHeaderIcon}
        description="facture logo"
        title={"Factures"}
        number={totalElementsInTable}
      />
      <TableFunctions
        nameSearchBar="search client"
        placeholder="Enter le nom du client"
        onSearch={(value: string) =>
          dispatch(SearchFactureByName({ name: value }))
        }
        csvData={factures}
        filename="factures"
      />
      <Table
        data={processedFactures}
        statusGetAllData={statusGetAllFactures}
        feilds={tableFactureFields}
        onShowPrint={(id: string) => {
          dispatch(GetOneFacture(id));
          navigate(`/facturation/${id}`);
        }}
      />
    </div>
  );
};

export default Facturation;
