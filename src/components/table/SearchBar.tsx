import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { SearchClientByName } from "../../store/ClientSlice";
import { ChangeEvent } from "react";

type Props = {
  name: string;
  placeholder: string;
};
const SearchBar = ({ name, placeholder }: Props) => {
  const dispatch = useDispatch<any>();

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let value = event.target.value;
    dispatch(SearchClientByName({ name: value }));
  };
  return (
    <div
      className={`flex flex-col  tracking-wider font-tajwal w-full ml-40 max-xl:ml-0 `}
    >
      <input
        name={name}
        className="px-6 py-4 outline-none input-creategig"
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
