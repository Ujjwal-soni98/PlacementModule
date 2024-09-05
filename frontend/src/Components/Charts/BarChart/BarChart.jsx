// BarChartComponent.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for the chart
const data = [
  { name: "Jan", Placed: 4000, amt: 2400 },
  { name: "Feb", Placed: 3000, amt: 2210 },
  { name: "Mar", Placed: 2000, amt: 2290 },
  { name: "Apr", Placed: 2780, amt: 2000 },
  { name: "May", Placed: 1890, amt: 2181 },
  { name: "Jun", Placed: 2390, amt: 2500 },
  { name: "Jul", Placed: 3490, amt: 2100 },
  { name: "Jul", Placed: 1340, amt: 2100 },
  { name: "Jul", Placed: 2490, amt: 2100 },
  { name: "Jul", Placed: 1230, amt: 2100 },
  { name: "Jul", Placed: 4230, amt: 2100 },
  { name: "Jul", Placed: 4340, amt: 2100 },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Placed" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
