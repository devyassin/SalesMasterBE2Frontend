import { ChangeEvent, useEffect } from "react";
import { clientLogo } from "../../assets";
import Input from "../../components/form/Input";
import InputPassword from "../../components/form/InputPassword";
import AskedSignIn from "../../components/ui/AskedSignIn ";
import Copyright from "../../components/ui/Copyright ";
import HeaderLogo from "../../components/ui/HeaderLogo";
import FirstBtn from "../../components/ui/button/FirstBtn";
import useLogin from "../../hooks/useLogin";
import { useAppSelector } from "../../store/store";
import { User } from "../../types";
import { handleLoginForm } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { LoginUser } = useLogin();
  const user: User = useAppSelector((state) => state.auth.user);
  console.log(user);
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let { name, value }: any = event.target;

    dispatch(handleLoginForm({ name, value }));
  };
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="flex-wrapper-col min-h-screen bg-dark-1 bg-[url(../src/assets/background.svg)] bg-cover bg-no-repeat">
      {/* Logo header */}
      <HeaderLogo />
      {/* Form */}
      <div className="flex flex-col w-1/2 py-6 mx-auto my-8 card-welcome px-14 max-sm:px-4 max-lg:w-2/3 max-sm:w-full ">
        <h1 className="title-welcome max-lg:text-[24px] max-lg:mb-[24px] mb-[55px]">
          {"S'authentifier"}
        </h1>
        <div className="flex items-center justify-between ">
          <hr className="h-[1px] mr-4 w-full  text-[#C49494] opacity-30" />
          <img
            src={clientLogo}
            alt="client logo"
            className="pt-2 pb-8 max-md:pb-0"
            width={55}
            height={55}
          />
          <hr className="h-[1px] ml-4 w-full text-[#C49494] opacity-30" />
        </div>

        {/* Form */}
        <form onSubmit={LoginUser} className="flex flex-col max-md:pt-8 ">
          <Input
            customClasses="w-full mt-8"
            name="email"
            type="email"
            placeholder="Email"
            onChangeHandler={handleChange}
          />

          <InputPassword
            name="motDePasse"
            customClasses="w-full mt-8"
            placeholder="Password"
            onChangeHandler={handleChange}
          />

          <FirstBtn customClasses="mt-8 py-2" text={"Login"} />
          <AskedSignIn type="login" text="Contactez nous " />
        </form>
      </div>

      {/* Copyright */}
      <div>
        <Copyright />
      </div>
    </div>
  );
};

export default Login;
