type Props = {
  element: number;
  isActive?: boolean;
  onGoToPage: (element: number) => void;
};

const PageItem = ({ isActive, element, onGoToPage }: Props) => {
  const baseClasses =
    "flex items-center cursor-pointer justify-center px-3 h-8 leading-tight border border-[#4a5568]";

  const classes = isActive
    ? `${baseClasses} bg-[#4a5568] text-white`
    : `${baseClasses} bg-[#2d3748] text-[#cbd5e0] hover:bg-[#4a5568] hover:text-white`;

  return (
    <li>
      <div onClick={() => onGoToPage(element)} className={classes}>
        {element}
      </div>
    </li>
  );
};

export default PageItem;
