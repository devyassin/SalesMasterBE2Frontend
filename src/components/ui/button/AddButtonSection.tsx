import { AddButton } from "../../../assets";
import { useDispatch } from "react-redux";
import { showoverlay } from "../../../store/ModalSlice";
type Props = {
  onShowFormModal: () => void;
};
const AddButtonSection = ({ onShowFormModal }: Props) => {
  const dispatch = useDispatch<any>();
  return (
    <img
      onClick={() => {
        dispatch(showoverlay());
        onShowFormModal();
      }}
      width={45}
      src={AddButton}
      alt="add btn"
      className="cursor-pointer hover:opacity-80 duration-300"
    />
  );
};

export default AddButtonSection;
