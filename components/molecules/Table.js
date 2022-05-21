import React from "react";
import style from "../../styles/table.module.css";

Table.defaultProps = {
  table: "",
  HeadContainer: "",
  tableData: [{}],
  children: "",
  headKey: [""],
  displayHeadKey: false,
  selfDisplayComponent: false,
};

function Table({
  tableData,
  children,
  headKey,
  displayHeadKey,
  selfDisplayComponent,
  displayComponent,
}) {
  const body = tableData.map((data, i) => {
    const keys = headKey;
    return (
      <tr key={i}>
        {keys.map((key, i) => (
          <td key={i}>{data[key]}</td>
        ))}
      </tr>
    );
  });
  return (
    <div className={style.table_container}>
      <div className={style.table_container_header}>{children}</div>

      <table className={style.table}>
        {displayHeadKey && (
          <thead>
            <tr>
              {headKey.map((data, i) => (
                <th key={i}>{data}</th>
              ))}
            </tr>
          </thead>
        )}

        <tbody>{selfDisplayComponent ? displayComponent : body}</tbody>
      </table>
    </div>
  );
}

export default Table;
