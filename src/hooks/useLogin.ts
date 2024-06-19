import { FormEvent, useEffect } from "react";
import { ToastLoading, Toastfailed, Toastsuccess } from "../helpers/Toasts";
import { zodHandllingErrors } from "../helpers/zodHandllingErrors ";
import { useAppSelector } from "../store/store";
import { useNavigate } from "react-router";
import { Login, clearStatusAuth, clearUser } from "../store/AuthSlice";
import { useDispatch } from "react-redux";
import { UserLoginValidation } from "../lib/validation/UserValidation";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { user, statusLogin, errorLogin } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (statusLogin === "succeeded") {
      Toastsuccess("Welcome !");
      setTimeout(() => {
        dispatch(clearUser());
        dispatch(clearStatusAuth());
        navigate("/dashboard");
      }, 1500);
    }

    if (statusLogin === "failed") {
      Toastfailed(errorLogin);
    }

    if (statusLogin === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusLogin]);

  const LoginUser = (e: FormEvent) => {
    e.preventDefault();
    if (zodHandllingErrors(UserLoginValidation, user)) {
      dispatch(Login(user));
    }
  };
  return { LoginUser };
};

export default useLogin;
