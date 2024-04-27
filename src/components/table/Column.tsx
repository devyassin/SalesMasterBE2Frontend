

type Props = {
  columnName: string;
};

const Column = ({ columnName }: Props) => {
  return (
    <th scope="col" className="px-6 py-3">
      {columnName}
    </th>
  );
};

export default Column;
