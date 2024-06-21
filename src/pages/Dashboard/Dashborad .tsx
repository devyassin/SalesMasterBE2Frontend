import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDashboardCards, getVenteCountsStats } from "../../store/Dashboard";
import { CardDataStats, VenteCountDataStats } from "../../types";
import { useAppSelector } from "../../store/store";
import { CardsDashboardData } from "../../constants/CardsDashboard";
import CardDataStatsDashboard from "../../components/ui/cards/CardDataStatsDashboard";
import PieChartVenteStatus from "../../components/charts/PieChartVenteStatus ";

const Dashborad = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getDashboardCards());
    dispatch(getVenteCountsStats());
  }, []);

  const cardsDataStats: CardDataStats = useAppSelector(
    (state) => state.dashboard.cards
  );

  const venteCountDataStats: VenteCountDataStats = useAppSelector(
    (state) => state.dashboard.ventesCountes
  );

  const statusGetAllCardsData = useAppSelector(
    (state) => state.dashboard.statusGetAllCardsData
  );

  const statusGetventesCountes = useAppSelector(
    (state) => state.dashboard.statusGetventesCountes
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

  let {
    venteNouvelleCount = 0,
    venteEncoursCount = 0,
    venteCompletedCount = 0,
  } = venteCountDataStats || {};

  let totalVentesCountStats = [
    venteNouvelleCount,
    venteEncoursCount,
    venteCompletedCount,
  ];
  if (
    statusGetAllCardsData === "loading" ||
    statusGetventesCountes === "loading"
  ) {
    return <div>Loading...</div>;
  }
  return (
    <div className="overflow-y-scroll scroll-smooth scrollbar-hide h-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {CardsDashboardData.map((cardData, i: number) => {
          let { title, rate, levelUp, icon } = cardData;
          return (
            <CardDataStatsDashboard
              key={i}
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
      <div className="pt-6 grid grid-cols-2 ">
        <PieChartVenteStatus data={totalVentesCountStats} />
      </div>
    </div>
  );
};

export default Dashborad;
