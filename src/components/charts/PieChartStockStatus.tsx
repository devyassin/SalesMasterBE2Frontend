import { Pie } from "react-chartjs-2";
import "chart.js/auto";
const options: any = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#fff", // Change the legend label color to white
      },
    },
    title: {
      display: true,
      text: "Répartition de l'état de stock",
      color: "#fff",
      font: {
        size: 24, // Set the title font size
      },
    },
  },
};
const labels = ["Faible", "Moyen", "Optimal"];

interface PieChartStockStatusProps {
  data: number[];
}

const PieChartStockStatus = ({ data }: PieChartStockStatusProps) => {
  const dataStats = {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: ["#F02E5E", "#008DDA", "#10B981"],
        borderColor: ["#F02E5E", "#008DDA", "#10B981"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="col-span-2 md:col-span-1 bg-blue-dark-1 rounded-lg">
      <Pie
        className="p-4 rounded-lg drop-shadow-lg "
        options={options}
        data={dataStats}
      />
    </div>
  );
};

export default PieChartStockStatus;
