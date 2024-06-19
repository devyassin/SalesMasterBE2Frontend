import { useDispatch } from "react-redux";
import { LogoutIcon } from "../../../assets";
import { logout } from "../../../store/AuthSlice";
import { useNavigate } from "react-router";
import { Toastsuccess } from "../../../helpers/Toasts";

const LogoutBtn = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        dispatch(logout());
        Toastsuccess("See u next time !");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }}
      className={`text-2xl 
  } h-[62px] pl-4 rounded-xl flex items-center space-x-6 font-tajwal hover:opacity-60 hover:duration-300`}
    >
      <img width={20} src={LogoutIcon} alt="logout btn" />
      <h1 className="text-[18px] text-white max-xl:hidden">Logout</h1>
    </button>
  );
};

export default LogoutBtn;
