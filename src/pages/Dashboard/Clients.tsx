import Header from "../../components/header/Header";
import { ClientsHeaderIcon } from "../../assets";
import TableFunctions from "../../components/table/TableFunctions";

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
    </div>
  );
};

export default Clients;
