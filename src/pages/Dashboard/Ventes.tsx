import { useDispatch } from "react-redux";
import { venteLogo } from "../../assets";
import Header from "../../components/header/Header";
import { Vente } from "../../types";
import { useAppSelector } from "../../store/store";
import { useEffect } from "react";
import {
  clearVente,
  getAllVentes,
  getOneVente,
  removeVente,
} from "../../store/VenteSlice";
import Table from "../../components/table/Table";
import { tableVenteFields } from "../../constants/TableConstants";
import {
  SetFormType,
  showFormModal,
  showoverlay,
} from "../../store/ModalSlice";
import TableFunctions from "../../components/table/TableFunctions";
import VenteForm from "../../components/form/VenteForm";

const Ventes = () => {
  const dispatch = useDispatch<any>();
  const ventes: Vente[] = useAppSelector((state) => state.ventes.data.content);
  const { page, totalPages, totalElementsInTable } = useAppSelector(
    (state) => state.ventes.data
  );

  const statusGetAllVentes = useAppSelector(
    (state) => state.ventes.statusGetAllVentes
  );
  const venteFormModalVisibility: any = useAppSelector(
    (state) => state.modals.FormModalVisibility
  );
  useEffect(() => {
    let size = 10;
    dispatch(getAllVentes([size, page]));
  }, [page]);
  return (
    <div className="flex flex-col">
      <Header
        image={venteLogo}
        description="vente logo"
        title={"Ventes"}
        number={totalElementsInTable}
      />
      <div className=" flex justify-end">
        <TableFunctions
          nameSearchBar="search vente"
          placeholder="Enter le nom du vente"
          onShowFormModal={() => {
            dispatch(showFormModal());
            dispatch(SetFormType({ formType: "add" }));
            dispatch(clearVente());
          }}
          csvData={ventes}
          filename="ventes"
        />
      </div>
      {venteFormModalVisibility && <VenteForm />}
      <Table
        data={ventes}
        statusGetAllData={statusGetAllVentes}
        feilds={tableVenteFields}
        onDelete={(id: string) => dispatch(removeVente(id))}
        onShowFormUpdate={(id: string) => {
          dispatch(getOneVente(id));
          dispatch(showFormModal());
          dispatch(showoverlay());
          dispatch(SetFormType({ formType: "update" }));
        }}
      />
    </div>
  );
};

export default Ventes;
