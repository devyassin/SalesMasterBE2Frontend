import { ChangeEvent } from "react";

type Props = {
  type: string;
  customClasses?: string;
  name: string;
  placeholder?: string;
  value?: string;
  container?: string;
  onChangeHandler?: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
};

const Input = ({
  name,
  type,
  container,
  customClasses,
  placeholder,
  value,
  onChangeHandler,
}: Props) => {
  return (
    <div className={`${container}`}>
      <input
        value={value}
        type={type}
        name={name}
        className={`input-form focus:bg-dark-6 outline-none  font-tajwal h-[61px] w-[273px] px-[28px] pt-[25px] pb-[19px] text-white ${customClasses}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Input;
