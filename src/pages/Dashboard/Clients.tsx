import Header from "../../components/header/Header";
import { ClientsHeaderIcon } from "../../assets";
import TableFunctions from "../../components/table/TableFunctions";
import Table from "../../components/table/Table";
import Pagination from "../../components/table/Pagination";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllClients } from "../../store/ClientSlice";
import { useAppSelector } from "../../store/store";
import { tableClientFields } from "../../constants/TableConstants";
import { NextPage, PreviousPage } from "../../store/ClientSlice";

const Clients = () => {
  const dispatch = useDispatch<any>();
  const clients: any = useAppSelector((state) => state.clients.data.content);
  const { page, totalPages } = useAppSelector((state) => state.clients.data);
  const statusGetAllClients = useAppSelector(
    (state) => state.clients.statusGetAllClients
  );
  useEffect(() => {
    dispatch(getAllClients({ size: 10, page: page }));
  }, [page]);

  return (
    <div className="flex flex-col ">
      <Header
        image={ClientsHeaderIcon}
        description="client logo"
        title={"Clients"}
        number={25}
      />
      <TableFunctions />
      <Table
        data={clients}
        statusGetAllData={statusGetAllClients}
        feilds={tableClientFields}
      />
      <Pagination
        page={page}
        totalPages={totalPages}
        onNextPage={() => dispatch(NextPage())}
        onPreviousPage={() => dispatch(PreviousPage())}
      />
    </div>
  );
};

export default Clients;
