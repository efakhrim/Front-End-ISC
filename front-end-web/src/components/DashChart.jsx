/* eslint-disable no-unused-vars */
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Element",
    "Days",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Dodit", 8, "#65A8CE", null],
  ["John", 10, "#65A8CE", null],
  ["Miranda", 19, "#65A8CE", null],
  ["Ardinanta", 42, "#65A8CE", null],
  ["Fulan", 64, "#65A8CE", null],
];

export const options = {
  title: "Total Days of Intensif Care",
  width: 700,
  height: 390,
  bar: { groupWidth: "70%" },
  legend: { position: "none" },
};

export default function DashChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}