import { useNavigate } from "react-router";

type Props = {
  type?: string;
  text?: string;
};

const AskedSignIn = ({ type, text }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="text-white text-center  font-tajwal pt-2 text-[14px] font-normal">
      {type ? "Vous n’avez pas un compte ?" : "Vous avez déjà un compte ?"}{" "}
      <span
        onClick={() => {
          if (type == "signup" || type == "login") {
            // push sing up
            navigate("/s'authentifier");
          } else {
            // push sing in
            navigate("/login");
          }
        }}
        className="cursor-pointer text-dark-blue font-bold"
      >
        {text}
      </span>
    </div>
  );
};

export default AskedSignIn;
