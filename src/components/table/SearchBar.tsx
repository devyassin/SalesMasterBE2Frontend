
import { ChangeEvent } from "react";

type Props = {
  name: string;
  placeholder: string;
  onSearch: (value: string) => void;
};
const SearchBar = ({ name, placeholder, onSearch }: Props) => {

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let value = event.target.value;
    onSearch(value);
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
