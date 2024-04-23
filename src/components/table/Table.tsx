const Table = () => {
  return (
    <div className="relative bg-[#d4d] w-full  overflow-x-auto shadow-md sm:rounded-lg mx-20">
      <table className="w-full text-sm text-left rtl:text-right  text-[#a0aec0]">
        <thead className="text-xs uppercase  bg-[#4a5568] text-[#a0aec0]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className=" border-b bg-[#2d3748]
      border-[#4a5568] hover:bg-[#718096]"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-[#4299e1] hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr
            className=" border-b bg-[#2d3748]
      border-[#4a5568] hover:bg-[#718096]"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-[#4299e1] hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr
            className=" border-b bg-[#2d3748]
      border-[#4a5568] hover:bg-[#718096]"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-[#4299e1] hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr
            className=" border-b bg-[#2d3748]
      border-[#4a5568] hover:bg-[#718096]"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-[#4299e1] hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
