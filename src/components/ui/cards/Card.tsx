import { Produit } from "../../../types";

type Props = {
  produit: Produit;
};

const Card = ({ produit }: Props) => {
  let description = produit.description;
  let truncatedDescription =
    description.length > 200 ? description.substring(0, 200) : description;
  return (
    <div className="bg-blue-dark-4 rounded-[20px] border border-white pb-4 hover:cursor-pointer hover:opacity-80 duration-150 ease-in-out">
      {/* container 1 */}
      <div className="relative">
        {/* image */}
        <div>
          <img
            src={produit.image}
            alt="pic"
            className="h-[166px] w-full rounded-t-[20px] border-b border-white"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      {/* container 2 */}
      <div>
        <div className="flex justify-between pt-4 px-3 items-center">
          <div className="flex font-tajwal items-center space-x-2 text-[20px]">
            {produit.nom}
          </div>

          <h3 className="text-[10px] bg-dark-blue px-4 py-[6px] rounded-[14px] ">
            Optimal
          </h3>
        </div>
        {/*  */}
        <div className="font-tajwal text-[12px] opacity-60 pt-4 px-3 tracking-wide leading-3 font-thin">
          {truncatedDescription} ......
        </div>

        <h1 className="text-[17px] opacity-80  tracking-wide font-tajwal pt-4 px-3">
          {produit.prix}Dh{" "}
          <span className="text-[#B7B797] opacity-58">
            ({produit.quantiteEnStock})
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Card;
