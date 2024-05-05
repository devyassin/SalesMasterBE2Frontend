import Row from "./Row";
import Thead from "./Thead";
type Props = {
  data: Object[];
  statusGetAllData: string;
  feilds: string[];
  onDelete: (id: string) => void;
  onShowFormUpdate: (id: string) => void;
};

const Table = ({
  data,
  statusGetAllData,
  feilds,
  onDelete,
  onShowFormUpdate,
}: Props) => {
  return (
    <div className="relative  mt-14 overflow-x-auto h-[50vh]  scrollbar-hide   shadow-md sm:rounded-lg  ">
      <table className="w-full text-sm text-left rtl:text-right text-[#a0aec0]">
        <Thead feilds={feilds} />
        <tbody className="overflow-y-scroll scroll scroll-smooth little-scrollbar-global ">
          {statusGetAllData === "succeeded" ? (
            data.map((objData: Object, i: number) => {
              const stringObjData: string[] = Object.values(objData);

              return (
                <Row
                  onShowFormUpdate={onShowFormUpdate}
                  onDelete={onDelete}
                  key={i}
                  cells={stringObjData}
                />
              );
            })
          ) : (
            // i will do skeleton animations later
            <tr className="animate-pulse opacity-80 bg-[#4a5568] px-4 h-[25px]"></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
