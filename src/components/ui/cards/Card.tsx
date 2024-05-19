import { useDispatch } from "react-redux";
import { Produit } from "../../../types";
import { getOneProduct } from "../../../store/ProductSlice";
import {
  SetFormType,
  showFormModal,
  showoverlay,
} from "../../../store/ModalSlice";
import { path } from "../../../constants/endpoints";

type Props = {
  produit: Produit;
};

const Card = ({ produit }: Props) => {
  const dispatch = useDispatch<any>();
  let description = produit.description;
  let truncatedDescription =
    description.length > 200 ? description.substring(0, 200) : description;
  let quantiteEnStock = produit.quantiteEnStock;
  let alert =
    quantiteEnStock > 40
      ? "Optimal"
      : quantiteEnStock > 20
      ? "Moyen"
      : "Faible";

  return (
    <div
      onClick={() => {
        dispatch(getOneProduct(produit.produitId));
        dispatch(showFormModal());
        dispatch(showoverlay());
        dispatch(SetFormType({ formType: "update" }));
      }}
      className="bg-blue-dark-4 rounded-[20px] border 
    border-white pb-4 hover:cursor-pointer hover:opacity-80 duration-150 ease-in-out"
    >
      {/* container 1 */}
      <div className="relative ">
        {/* image */}
        <div>
          <img
            src={`${
              produit.image.startsWith("http")
                ? produit.image
                : `${path}${produit.image}`
            }`}
            alt="pic"
            className="h-[166px] w-full rounded-t-[20px] border-b border-white"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      {/* container 2 */}
      <div className="flex flex-col justify-between  h-[166px] ">
        <div className="flex justify-between pt-4 px-3 items-start space-x-4">
          <div className="flex font-tajwal items-center space-x-2 text-[20px]">
            {produit.nom}
          </div>

          <h3
            className={`text-[10px] ${
              alert == "Optimal"
                ? "bg-dark-blue "
                : alert == "Moyen"
                ? "bg-[#FA7070]"
                : "bg-[#B40707]"
            } px-4 py-[6px] rounded-[14px]`}
          >
            {alert}
          </h3>
        </div>
        {/*  */}
        <div className="flex flex-col justify-between ">
          <div className="font-tajwal w-full text-[12px] opacity-60  pt-4 px-3 tracking-wide leading-3 font-thin">
            {truncatedDescription} ......
          </div>

          <h1 className="text-[17px]  opacity-80 tracking-wide font-tajwal pt-4 px-3">
            {produit.prix}Dh{" "}
            <span className="text-[#B7B797] opacity-58 ">
              ({produit.quantiteEnStock})
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
