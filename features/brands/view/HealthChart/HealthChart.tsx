import { Box } from "@chakra-ui/react";
import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { styles } from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function HealthChart() {
  return (
    <Box {...styles.wrapper}>
      <Box {...styles.title}>Statistics of your health</Box>
      <Box {...styles.chartWrapper}>
        <ChartComponent />
      </Box>
    </Box>
  );
}

// react chart js component with curved line and gradient area background

export default function ChartComponent() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "",

        data: [3, 7, 5, 19, 11, 10, 0],
        fill: true,
        backgroundColor: "rgba(255, 195, 99, 0.2)",
        borderColor: "orange",
        tension: 0.5,
      } as ChartData<"line">["datasets"][0],
    ],
  };

  const options: ChartOptions = {
    maintainAspectRatio: false,

    // height

    responsive: true,
    bar: {
      datasets: {
        barPercentage: 100.5,
        categoryPercentage: 100.5,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        startAngle: 0,
        weight: 5,
        grid: {
          tickLength: 0,
          color: "rgba(0,0,0,0.08)",
        },
        ticks: {
          stepSize: 5,
          padding: 10,
        },
      },
    },
  };

  return (
    <div>
      <Line height="240" data={data} options={options as any} />
    </div>
  );
}
