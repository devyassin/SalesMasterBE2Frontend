type Props = {
  cells: string[];
};

const Row = ({ cells }: Props) => {
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

      <td className="px-6 py-4 text-right">
        <a href="#" className="font-medium text-[#4299e1] hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default Row;
