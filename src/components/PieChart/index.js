import { PieChart, Pie, Cell } from "recharts";

const Piechart = () => {
  const data = [
    { name: "Group A", value: 425 },
    { name: "Group B", value: 325 },
  ];
  const COLORS = ["#51a7a8", "#d46161"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="30%"
        cy="30%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Piechart;
