import Header from "../../components/header/Header";
import { ClientsHeaderIcon } from "../../assets";
import TableFunctions from "../../components/table/TableFunctions";
import Table from "../../components/table/Table";
import Pagination from "../../components/table/Pagination";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  GoToPage,
  SearchClientByName,
  clearClient,
  getAllClients,
  getOneClient,
  removeClient,
} from "../../store/ClientSlice";
import { useAppSelector } from "../../store/store";
import { tableClientFields } from "../../constants/TableConstants";
import { NextPage, PreviousPage } from "../../store/ClientSlice";
import {
  SetFormType,
  showFormModal,
  showoverlay,
} from "../../store/ModalSlice";
import ClientForm from "../../components/form/ClientForm";

const Clients = () => {
  const dispatch = useDispatch<any>();
  const clients: any = useAppSelector((state) => state.clients.data.content);
  const { page, totalPages, totalElementsInTable } = useAppSelector(
    (state) => state.clients.data
  );
  const name = useAppSelector((state) => state.clients.name);
  const statusGetAllClients = useAppSelector(
    (state) => state.clients.statusGetAllClients
  );
  const clientFormModalVisibility: any = useAppSelector(
    (state) => state.modals.FormModalVisibility
  );
  useEffect(() => {
    let size = 10;
    dispatch(getAllClients([size, page, name]));
  }, [page, name]);

  return (
    <div className="flex flex-col ">
      <Header
        image={ClientsHeaderIcon}
        description="client logo"
        title={"Clients"}
        number={totalElementsInTable}
      />
      <TableFunctions
        nameSearchBar="search client"
        placeholder="Enter le nom du client"
        onShowFormModal={() => {
          dispatch(showFormModal());
          dispatch(SetFormType({ formType: "add" }));
          dispatch(clearClient());
        }}
        onSearch={(value: string) =>
          dispatch(SearchClientByName({ name: value }))
        }
        csvData={clients}
        filename="clients"
      />
      {clientFormModalVisibility && <ClientForm />}
      <Table
        data={clients}
        statusGetAllData={statusGetAllClients}
        feilds={tableClientFields}
        onDelete={(id: string) => dispatch(removeClient(id))}
        onShowFormUpdate={(id: string) => {
          dispatch(getOneClient(id));
          dispatch(showFormModal());
          dispatch(showoverlay());
          dispatch(SetFormType({ formType: "update" }));
        }}
      />
      <Pagination
        page={page}
        totalPages={totalPages}
        onNextPage={() => dispatch(NextPage())}
        onGoToPage={(element: number) => {
          dispatch(GoToPage({ page: element-1 }));
        }}
        onPreviousPage={() => dispatch(PreviousPage())}
      />
    </div>
  );
};

export default Clients;
