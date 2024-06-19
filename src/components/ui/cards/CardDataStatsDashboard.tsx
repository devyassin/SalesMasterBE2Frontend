import { ReactNode } from "react";
import { ClientIcon } from "../../../assets";
import CardDataStats from "./CardDataStats";

type CardDataStatsDashboardProps = {
  title: string;
  total: string;
  rate: string;
  levelUp: boolean;
  children?: ReactNode;
};

const CardDataStatsDashboard = ({
  title,
  total,
  rate,
  levelUp,
  children,
}: CardDataStatsDashboardProps) => {
  return (
    <CardDataStats title={title} total={total} rate={rate} levelUp={levelUp}>
      {children || <img width={20} src={ClientIcon} alt={"icon"} />}
    </CardDataStats>
  );
};

export default CardDataStatsDashboard;
