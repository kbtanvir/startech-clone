import { Box, HStack, Text } from "@chakra-ui/react";
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
import { BsHeartbreak } from "react-icons/bs";
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

export function HeartRateChart() {
  return (
    <Box {...styles.wrapper}>
      <HStack {...styles.title}>
        <BsHeartbreak />
        <Text>Heart Rate</Text>
      </HStack>
      <Box {...styles.chartWrapper}>
        <ChartComponent />
      </Box>
    </Box>
  );
}

// react chart js component with curved line and gradient area background

export default function ChartComponent() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "",

        data: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105],
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
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Line height="240" data={data} options={options as any} />
    </div>
  );
}
