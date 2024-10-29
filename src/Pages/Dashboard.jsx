import BarChart from "../components/charts/BarChart";
import InfoCard from "../components/Dashboard/InfoCard";

const Dashboard = () => {
  // year chart
  const yearChartOptions = {
    chart: {
      id: "year-chart",
    },
    colors: ["#e23844"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const yearChartSeries = [
    {
      name: "yearSales",
      data: [30, 40, 45, 50, 49, 60, 70, 90, 20, 55, 35, 55],
    },
  ];
  // weekly chart
  const weekChartOptions = {
    chart: {
      id: "week-chart",
    },
    colors: ["#e23844"],
    xaxis: {
      categories: ["Sun", "Mon", "Tuse", "Wed", "Thus", "Fri", "Sat"],
    },
  };
  const weekChartSeries = [
    {
      name: "weekSales",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
  ];

  return (
    <>
      <h1 className="text-2xl uppercase font-bold text-theme mb-5">
        Dashboard
      </h1>
      <div className="grid gird-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {new Array(9).fill(undefined).map((_, index) => (
          <InfoCard key={index} index={index} />
        ))}
      </div>
      <div className="flex items-center justify-between flex-wrap gap-6">
        <div className="flex-1 shadow-lg p-5 rounded-2xl bg-white">
          <h2 className="text-xl mb-3 font-semibold">Weekly Revenue</h2>
          <BarChart
            chartOptions={weekChartOptions}
            chartSeries={weekChartSeries}
            type={"bar"}
          />
        </div>
        <div className="flex-1 shadow-lg p-5 rounded-2xl bg-white">
          <h2 className="text-xl mb-3 font-semibold">Yearly Revenue</h2>
          <BarChart
            chartOptions={yearChartOptions}
            chartSeries={yearChartSeries}
            type={"line"}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
