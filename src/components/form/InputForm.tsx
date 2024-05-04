type InputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
};

const InputForm: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => {
  return (
    <input
      name={name}
      value={value}
      className="px-6 py-4 w-full outline-none input-creategig"
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputForm;
