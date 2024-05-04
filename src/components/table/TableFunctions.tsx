import { TfiImport, TfiExport, TfiFilter } from "react-icons/tfi";
import AddButtonSection from "../ui/button/AddButtonSection";
import StyleOne from "../ui/iconStyles/StyleOne";
import SearchBar from "./SearchBar";
import { CSVLink } from "react-csv";

type Props = {
  csvData: Object[];
  filename: string;
  onShowFormModal: () => void;
};
const TableFunctions = ({ csvData, filename, onShowFormModal }: Props) => {
  return (
    <div className="flex justify-between items-center mt-10 space-x-24 mr-10">
      <SearchBar name="search client" placeholder="Enter le nom du client" />
      <div className="flex space-x-8 pr-10 items-center">
        <div className="flex  space-x-6">
          <StyleOne>
            <TfiFilter size={25} />
          </StyleOne>
          <StyleOne>
            <TfiImport size={25} />
          </StyleOne>
          <CSVLink data={csvData ? csvData : ""} filename={filename}>
            <StyleOne>
              <TfiExport size={25} />
            </StyleOne>
          </CSVLink>
        </div>
        <AddButtonSection onShowFormModal={onShowFormModal} />
      </div>
    </div>
  );
};

export default TableFunctions;
