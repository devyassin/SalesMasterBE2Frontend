type Props = {
  type?: string;
};

const AskedSignIn = ({ type }: Props) => {
  return (
    <div className="text-white text-center  font-tajwal pt-2 text-[14px] font-normal">
      {type ? "Vous n’avez pas un compte ?" : "Vous avez déjà un compte ?"}{" "}
      <span
        onClick={() => {
          if (type) {
            // push sing up
          } else {
            // push sing in
          }
        }}
        className="cursor-pointer text-dark-blue font-bold"
      >
        {type ? "Se connecter" : "S’inscrire"}
      </span>
    </div>
  );
};

export default AskedSignIn;
