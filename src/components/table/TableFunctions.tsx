import { TfiImport, TfiExport, TfiFilter } from "react-icons/tfi";
import AddButtonSection from "../ui/button/AddButtonSection";
import StyleOne from "../ui/iconStyles/StyleOne";
import SearchBar from "./SearchBar";
import { CSVLink } from "react-csv";

type Props = {
  csvData: Object[];
  filename: string;
  onShowFormModal?: () => void;
  onSearch?: (value: string) => void;
  nameSearchBar: string;
  placeholder: string;
};
const TableFunctions = ({
  csvData,
  filename,
  onShowFormModal,
  onSearch,
  nameSearchBar,
  placeholder,
}: Props) => {
  return (
    <div className="flex justify-between items-center mt-10 space-x-24 mr-4">
      {onSearch && (
        <SearchBar
          onSearch={onSearch}
          name={nameSearchBar}
          placeholder={placeholder}
        />
      )}
      <div className={`flex space-x-8 ${onSearch && "pr-10"} items-center`}>
        <div className="flex  space-x-4 ">
          <StyleOne>
            <TfiFilter size={20} />
          </StyleOne>
          <StyleOne>
            <TfiImport size={20} />
          </StyleOne>
          <CSVLink data={csvData ? csvData : ""} filename={filename}>
            <StyleOne>
              <TfiExport size={20} />
            </StyleOne>
          </CSVLink>
        </div>
        {onShowFormModal && (
          <AddButtonSection onShowFormModal={onShowFormModal} />
        )}
      </div>
    </div>
  );
};

export default TableFunctions;
