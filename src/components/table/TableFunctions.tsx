import { TfiImport, TfiExport, TfiFilter } from "react-icons/tfi";
import AddButtonSection from "../ui/button/AddButtonSection";
import StyleOne from "../ui/iconStyles/StyleOne";
import SearchBar from "./SearchBar";

const TableFunctions = () => {
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
          <StyleOne>
            <TfiExport size={25} />
          </StyleOne>
        </div>
        <AddButtonSection />
      </div>
    </div>
  );
};

export default TableFunctions;
