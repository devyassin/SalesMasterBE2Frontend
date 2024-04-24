const Pagination = () => {
  return (
    <nav className=" flex justify-end mt-4">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight   border border-e-0 rounded-s-lg bg-[#2d3748] border-[#4a5568] text-[#cbd5e0] hover:bg-[#4a5568] hover:text-white"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight   border  bg-[#2d3748] border-[#4a5568] text-[#cbd5e0] hover:bg-[#4a5568] hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight   border  bg-[#2d3748] border-[#4a5568] text-[#cbd5e0] hover:bg-[#4a5568] hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 border-[#4a5568] bg-[#4a5568] text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight   border  bg-[#2d3748] border-[#4a5568] text-[#cbd5e0] hover:bg-[#4a5568] hover:text-white"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight   border  bg-[#2d3748] border-[#4a5568] text-[#cbd5e0] hover:bg-[#4a5568] hover:text-white"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight   border  rounded-e-lg bg-[#2d3748] border-[#4a5568] text-[#cbd5e0] hover:bg-[#4a5568] hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
