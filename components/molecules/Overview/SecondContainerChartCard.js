import React from "react";
import { data } from "../../../config/ChartData";

import FakeChart from "../../../images/icons/ChartIcon";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
} from "recharts";

SecondContainerChartCard.defaultProps = {
  amount: "€115,125",
  date: "Apr 1 - May",
  change: "10.57%",
  header: "Revenue",
  chartData: data,
};

function SecondContainerChartCard({ header, amount, date, change, chartData }) {
  console.log("chart data", chartData);
  return (
    <div className="d-flex flex-row align-align-items-center">
      <div className="w-50 d-flex flex-row justify-content-center align-items-center">
        <ResponsiveContainer width="100%" maxHeight="75%">
          <LineChart
            width={730}
            height={250}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            strokeWidth={3}
          >
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#000000" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="w-50">
        <p className="small_text grey_text">{header}</p>
        <h5 className="small_text grey_text">{amount}</h5>
        <p>{date}</p>
        <p className="green_text small_text">{change}</p>
      </div>
    </div>
  );
}

export default SecondContainerChartCard;
