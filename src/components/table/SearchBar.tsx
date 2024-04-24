type Props = {
  name: string;
  placeholder: string;
};
const SearchBar = ({ name, placeholder }: Props) => {
  return (
    <div
      className={`flex flex-col  tracking-wider font-tajwal w-full ml-40 max-xl:ml-0 `}
    >
      <input
        name={name}
        className="px-6 py-4 outline-none input-creategig"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
