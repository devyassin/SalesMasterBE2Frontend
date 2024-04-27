import { useDispatch } from "react-redux";
import { GoToPage } from "../../store/ClientSlice";

type Props = {
  element: number;
  isActive?: boolean;
};

const PageItem = ({ isActive, element }: Props) => {
  const dispatch = useDispatch<any>();
  const baseClasses =
    "flex items-center cursor-pointer justify-center px-3 h-8 leading-tight border border-[#4a5568]";

  const classes = isActive
    ? `${baseClasses} bg-[#4a5568] text-white`
    : `${baseClasses} bg-[#2d3748] text-[#cbd5e0] hover:bg-[#4a5568] hover:text-white`;

  return (
    <li>
      <a
        onClick={() => dispatch(GoToPage({ page: element - 1 }))}
        className={classes}
      >
        {element}
      </a>
    </li>
  );
};

export default PageItem;
