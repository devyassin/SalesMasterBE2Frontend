import { MdCreate, MdDelete, MdEmail } from "react-icons/md";
 
type Props = {
  cells: string[];
  onDelete: (id: string) => void;
  onShowFormUpdate: (id: string) => void;
};

const Row = ({ cells, onDelete, onShowFormUpdate }: Props) => {
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
        <MdDelete
          onClick={() => onDelete(cells[0])}
          className="duration-150 cursor-pointer hover:opacity-60"
          size={20}
          color="#F02E5E"
        />
        <MdCreate
          onClick={() => {
            onShowFormUpdate(cells[0]);
          }}
          className="duration-150 cursor-pointer hover:opacity-60"
          size={20}
          color="#4299e1"
        />

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
