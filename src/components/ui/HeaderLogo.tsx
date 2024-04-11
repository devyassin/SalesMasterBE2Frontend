import { logo } from "../../assets";

const HeaderLogo = () => {

    return (
    <div
      className="w-[7.5rem] h-[2.87625rem] cursor-pointer"
    >
      <img src={logo} height={200} width={200} alt="logo" />
    </div>
  );
};

export default HeaderLogo;
