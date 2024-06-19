import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDashboardCards } from "../../store/Dashboard";
import { CardDataStats } from "../../types";
import { useAppSelector } from "../../store/store";
import { CardsDashboardData } from "../../constants/CardsDashboard";
import CardDataStatsDashboard from "../../components/ui/cards/CardDataStatsDashboard";

const Dashborad = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getDashboardCards());
  }, []);

  const cardsDataStats: CardDataStats = useAppSelector(
    (state) => state.dashboard.cards
  );

  const statusGetAllCardsData = useAppSelector(
    (state) => state.dashboard.statusGetAllCardsData
  );
  let {
    totalClients = 0,
    totalVentes = 0,
    totalUsers = 0,
    totalProducts = 0,
    totalFactures = 0,
  } = cardsDataStats || {};

  let totalsStats = [
    totalClients,
    totalVentes,
    totalUsers,
    totalProducts,
    totalFactures,
  ];
  
  if (statusGetAllCardsData === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {CardsDashboardData.map((cardData, i: number) => {
        let { title, rate, levelUp, icon } = cardData;
        return (
          <CardDataStatsDashboard
            title={title}
            rate={rate}
            levelUp={levelUp}
            total={totalsStats[i].toString()}
          >
            <img width={20} src={icon} alt={title} />
          </CardDataStatsDashboard>
        );
      })}
    </div>
  );
};

export default Dashborad;
