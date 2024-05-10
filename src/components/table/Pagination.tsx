import PageItem from "./PageItem";

type Props = {
  page: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
};

const Pagination = ({
  page,
  totalPages,
  onPreviousPage,
  onNextPage,
}: Props) => {
  const isPreviousDisabled = page === 0;
  const isNextDisabled = page === totalPages - 1;

  const handlePrevious = () => {
    if (!isPreviousDisabled) {
      onPreviousPage();
    }
  };

  const handleNext = () => {
    if (!isNextDisabled) {
      onNextPage();
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  if (totalPages === 0) return;

  return (
    <nav className="flex justify-end mt-4">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <a
            onClick={handlePrevious}
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg bg-[#2d3748] border-[#4a5568] text-[#cbd5e0] hover:bg-[#4a5568] hover:text-white ${
              isPreviousDisabled
                ? "disabled opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <PageItem
            key={pageNumber}
            element={pageNumber}
            isActive={page + 1 === pageNumber}
          />
        ))}
        <li>
          <a
            onClick={handleNext}
            className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg bg-[#2d3748] border-[#4a5568] text-[#cbd5e0] hover:bg-[#4a5568] hover:text-white ${
              isNextDisabled
                ? "disabled opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
