type Props = {
  text: string;
  customClasses?: string;
  typeBtn?: string;
};

const GreenBtn = ({ text, customClasses, typeBtn }: Props) => {
  return (
    <button
      type={`${typeBtn ? "button" : "submit"}`}
      className={`flex bg-light-green text-[#000] font-semibold px-4 items-center  justify-center  
      ${customClasses}
      cursor-pointer hover:opacity-90 duration-150 ease-in-out rounded-[7px]  font-tajwal `}
    >
      <div>{text}</div>
    </button>
  );
};

export default GreenBtn;
