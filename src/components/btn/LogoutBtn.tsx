import { LogoutIcon } from "../../assets";

const LogoutBtn = () => {
  return (
    <button
      className={`text-2xl 
  } h-[62px] pl-4 rounded-xl flex items-center space-x-6 font-tajwal hover:opacity-60 hover:duration-300`}
    >
      <img src={LogoutIcon} alt="logout btn" />
      <h1 className="text-xl text-white max-xl:hidden">Logout</h1>
    </button>
  );
};

export default LogoutBtn;
