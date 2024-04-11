import { useState } from "react";
import { hiddenEye, showenEye } from "../../assets";
type Props = {
  customClasses?: string;
  name: string;
  placeholder?: string;
  value?: string;
};

const InputPassword = ({ customClasses, placeholder, name, value }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        value={value}
        type={show ? "password" : "text"}
        name={name}
        className={`input-form focus:bg-dark-6 outline-none font-tajwal h-[61px] w-[273px] px-[28px] pt-[25px] pb-[19px] text-white ${customClasses} `}
        placeholder={placeholder}
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
