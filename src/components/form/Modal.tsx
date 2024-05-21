import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { showFormModal, showoverlay } from "../../store/ModalSlice";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  formHeader: string;
  yaxe: string;
  clear?: () => void;
};

const Modal = ({ children, formHeader, yaxe, clear }: Props) => {
  const dispatch = useDispatch<any>();
  return (
    <motion.div
      animate={{
        y: `${yaxe}`,
        scale: 1,
      }}
      initial={{
        y: 0,
        x: "-50%",
        scale: 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
      }}
      className="absolute z-40 w-full p-6 -translate-x-1/2 bg-blue-dark-2   rounded-lg shadow-lg md:max-w-3xl top-1/2 left-1/2 -translate-y-2/3"
    >
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl">{formHeader}</h1>
        <AiFillCloseCircle
          onClick={() => {
            dispatch(showFormModal());
            dispatch(showoverlay());
            {
              clear && clear();
            }
          }}
          className="text-soft-read duration-150 cursor-pointer hover:opacity-75"
          size={30}
        />
      </div>

      {children}
    </motion.div>
  );
};

export default Modal;
