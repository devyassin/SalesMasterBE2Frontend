import { TfiImport, TfiExport, TfiFilter } from "react-icons/tfi";
import { AddButton } from "../../assets";

const TableFunctions = () => {
  return (
    <div className="flex justify-between items-center mt-10 space-x-24">
      <div
        className={`flex flex-col  tracking-wider font-tajwal w-full ml-40 max-xl:ml-0 `}
      >
        <input
          name="search client"
          className="px-6 py-4 outline-none input-creategig"
          type="text"
          placeholder="Enter le nom du client"
        />
      </div>
      <div className="flex space-x-8 pr-10 items-center">
        <div className="flex  space-x-6">
          <div className="bg-blue-dark-5 w-fit p-2 md:p-3 text-white cursor-pointer rounded-lg shadow-sm hover:opacity-70 duration-150">
            <TfiFilter size={25} />
          </div>
          <div className="bg-blue-dark-5 w-fit p-2 md:p-3 text-white cursor-pointer rounded-lg shadow-sm hover:opacity-70 duration-150">
            <TfiImport size={25} />
          </div>
          <div className="bg-blue-dark-5 w-fit p-2 md:p-3 text-white cursor-pointer rounded-lg shadow-sm hover:opacity-70 duration-150">
            <TfiExport size={25} />
          </div>
        </div>
        <img
          src={AddButton}
          alt="add btn"
          className="cursor-pointer hover:opacity-80 duration-300"
        />
      </div>
    </div>
  );
};

export default TableFunctions;
