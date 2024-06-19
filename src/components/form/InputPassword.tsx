import { ChangeEvent, useState } from "react";
import { hiddenEye, showenEye } from "../../assets";
type Props = {
  customClasses?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChangeHandler?: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
};

const InputPassword = ({
  customClasses,
  placeholder,
  name,
  value,
  onChangeHandler,
}: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        value={value}
        type={show ? "password" : "text"}
        name={name}
        className={`input-form focus:bg-dark-6 outline-none font-tajwal h-[61px] w-[273px] px-[28px] pt-[25px] pb-[19px] text-white ${customClasses} `}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      {show ? (
        <img
          onClick={() => setShow(false)}
          className="absolute max-md:left-[88%] top-[62%] left-[92%] cursor-pointer"
          src={hiddenEye}
          height={14}
          width={20}
          alt="hidden eye"
        />
      ) : (
        <img
          onClick={() => setShow(true)}
          className="absolute max-md:left-[88%] top-[62%] left-[92%] cursor-pointer"
          src={showenEye}
          height={14}
          width={20}
          alt="hidden eye"
        />
      )}
    </div>
  );
};

export default InputPassword;
