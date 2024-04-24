import Header from "../../components/header/Header";
import { ClientsHeaderIcon } from "../../assets";
import TableFunctions from "../../components/table/TableFunctions";
import Table from "../../components/table/Table";
import Pagination from "../../components/table/Pagination";

const Clients = () => {
  return (
    <div className="flex flex-col ">
      <Header
        image={ClientsHeaderIcon}
        description="client logo"
        title="Clients"
        number={25}
      />
      <TableFunctions />
      <Table />
      <Pagination />
    </div>
  );
};

export default Clients;
