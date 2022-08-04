import React from "react";
import styles from "../styles/Home.module.css";
import { privatePolicy as ppList } from "../config/termsAndConditions";

function termsAndCondition(props) {
  const listDisp = ppList.map(({ header, desc }, index) => {
    return (
      <div className="row" style={{ marginBottom: 30 + "px" }} key={index}>
        <div className={`${"col-4"}`}>
          {header && <span className={`${styles.name}`}>{header}</span>}
        </div>
        <div className="col-12 col-md-8">{desc}</div>
      </div>
    );
  });
  return (
    <div className="d-flex w-100 justify-content-center">
      <div className={`${styles.partnersSectionWrapper}`}>{listDisp}</div>
    </div>
  );
}

export default termsAndCondition;
