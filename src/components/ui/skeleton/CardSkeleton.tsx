import { CardsSkeleton } from "../../../constants/helpers";
import { Skeleton } from "./Skeleton";
const CardSkeleton = () => {
  return CardsSkeleton.map((cardskeleton) => {
    return (
      <Skeleton className="rounded-[20px] h-[300px] flex flex-col"></Skeleton>
    );
  });
};

export default CardSkeleton;
