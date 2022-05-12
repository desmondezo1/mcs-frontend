import React from "react";

import styles from "../../../styles/Home.module.css";

import Button from "../../atoms/Buttons";
import { data } from "../../../config/ChartData";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";

function Chart(props) {
  return (
    <div className={styles.chart_container + " p-3 px-4"}>
      <div className="w-100 d-flex flex-row justify-content-between align-items-center mb-2">
        <div>
          <p>Sales Value</p>
          <h5>€10,567</h5>
          <div className="text-8em">
            Yesterday <span className="green_text">10.57%</span>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <Button size="auto" className="mx-2" fontSize="0.8em">
            DAY
          </Button>
          <Button
            size="auto"
            color="secondary"
            className="mx-2"
            fontSize="0.8em"
          >
            MONTH
          </Button>
          <Button
            size="auto"
            color="secondary"
            className="mx-2"
            fontSize="0.8em"
          >
            YEAR
          </Button>
        </div>
      </div>
      <ResponsiveContainer
        width="90%"
        // height={300}

        maxHeight="75%"
      >
        <LineChart
          width={730}
          data={data}
          // maxHeight="50%"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#000000"
            strokeWidth={2}
            dot={{ stroke: "black", strokeWidth: 2, fill: "black" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
