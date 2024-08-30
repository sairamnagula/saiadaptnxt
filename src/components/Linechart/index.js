import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "./index.css";

const Linechart = () => {
  const data = [
    {
      name: "6/30/2024 - 7/6/2024",
      orders: 4,
      sales: 1400,
      amt: 2400,
    },
    {
      name: "7/7/2024 - 7/13/2024",
      orders: 2,
      sales: 800,
      amt: 2210,
    },
    {
      name: "7/21/2024 - 7/27/2024",
      orders: 1.2,
      sales: 400,
      amt: 2290,
    },
  ];

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <Line
        yAxisId="right"
        type="monotone"
        dataKey="orders"
        stroke="#51a7a8"
        activeDot={{ r: 8 }}
      />
      <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#c75f40" />

      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="name" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default Linechart;
