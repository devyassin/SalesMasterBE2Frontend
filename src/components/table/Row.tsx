import { MdCreate, MdDelete, MdEmail, MdLocalPrintshop } from "react-icons/md";

type Props = {
  cells: string[];
  onDelete: ((id: string) => void) | null;
  onShowFormUpdate: ((id: string) => void) | null;
  onShowPrint?: ((id: string) => void) | null;
};

const Row = ({ cells, onDelete, onShowFormUpdate, onShowPrint }: Props) => {
  return (
    <tr
      className=" border-b bg-[#2d3748]
border-[#4a5568] hover:bg-[#718096]"
    >
      {cells.map((cell, i) => {
        return (
          <th key={i} className="px-6 py-4   font-medium   text-white">
            {cell}
          </th>
        );
      })}

      <td className="flex space-x-2 px-6 py-4 text-right">
        {onDelete && (
          <MdDelete
            onClick={() => onDelete(cells[0])}
            className="duration-150 cursor-pointer hover:opacity-60"
            size={20}
            color="#F02E5E"
          />
        )}
        {onShowFormUpdate && (
          <MdCreate
            onClick={() => {
              onShowFormUpdate(cells[0]);
            }}
            className="duration-150 cursor-pointer hover:opacity-60"
            size={20}
            color="#4299e1"
          />
        )}
        {onShowPrint && (
          <MdLocalPrintshop
            className="duration-150 cursor-pointer hover:opacity-60"
            size={20}
            color="orange"
            onClick={() => {
              onShowPrint(cells[0]);
            }}
          />
        )}
        <a href={`mailto:${cells[3]}`}>
          <MdEmail
            className="duration-150 cursor-pointer hover:opacity-60"
            size={20}
            color="#A3DE83"
          />
        </a>
      </td>
    </tr>
  );
};

export default Row;
