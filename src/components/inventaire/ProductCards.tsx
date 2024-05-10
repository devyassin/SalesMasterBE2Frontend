import { useAppSelector } from "../../store/store";
import { Produit } from "../../types";
import Card from "../ui/cards/Card";
import CardSkeleton from "../ui/skeleton/CardSkeleton";

type Props = {
  produits: Produit[];
};

const ProductCards = ({ produits }: Props) => {
  const statusGetAllProducts = useAppSelector(
    (state) => state.produits.statusGetAllProducts
  );

  return (
    <div
      className="text-white text-5xl grid grid-cols-3 max-lg:grid-cols-2 
max-lg:mx-16 max-sm:grid-cols-1 max-sm:mx-16 gap-8 mt-8 mx-10 pb-4
"
    >
      {statusGetAllProducts == "succeeded" ? (
        produits.map((produit: Produit, i) => {
          return <Card key={i} produit={produit} />;
        })
      ) : (
        <CardSkeleton />
      )}
    </div>
  );
};

export default ProductCards;
