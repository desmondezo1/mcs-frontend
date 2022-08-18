import React from "react";
import styles from "../styles/Home.module.css";
import { privatePolicy as ppList } from "../config/privatePolicy";

function privatePolicy(props) {
  const listDisp = ppList.map(({ header, desc }, index) => {
    const customId = header.toLowerCase().replace(/\s/g, "_");
    return (
      <div className="row" style={{ marginBottom: 30 + "px" }} key={index}>
        <div
          className={`${"col-4"}`}
          {...(header
            ? {
                id: customId,
              }
            : {})}
        >
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

export default privatePolicy;
