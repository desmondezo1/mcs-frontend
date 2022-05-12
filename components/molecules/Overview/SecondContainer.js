import React from "react";

import styles from "../../../styles/Home.module.css";
import ChartCard from "./SecondContainerChartCard";
import DisplayCard from "./SecondContainerDisplayCard";

function SecondContainer(props) {
  return (
    <div className={styles.second_container}>
      <ChartCard />
      <ChartCard />
      <ChartCard />

      <DisplayCard />
      <DisplayCard header={"Total Orders"} content="106750" />
      <DisplayCard header={"Total Products"} content="5478" />
    </div>
  );
}

export default SecondContainer;
