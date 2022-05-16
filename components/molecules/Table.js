import React from "react";
import style from "../../styles/table.module.css";
import PropTypes from "prop-types";

Table.defaultProps = {
  headKeys: [],
  tableData: [{}],
  displayHead: false,
  displayComponent: false,
  selfDisplayComponent: false,
};
Table.propTypes = {
  headKeys: PropTypes.array,
  tableData: PropTypes.array.isRequired,
  displayHead: PropTypes.arrayOf(PropTypes.object),
  displayComponent: PropTypes.string,
  selfDisplayComponent: false,
};

/**
 * @headKeys  Array of table head
 * @tableData Array of table data
 * @selfDisplayComponent Bool if component should render custom comp
 * @returns React component
 */
function Table({
  headKeys,
  tableData,
  displayHead,
  displayComponent,
  selfDisplayComponent,
}) {
  const tableHead = headKeys.map(({ keyValue }, i) => (
    <th key={`${keyValue}${i}`}>{keyValue}</th>
  ));
  const tableBody = tableData.map((data, i) => {
    const mapKeys = headKeys.map(({ headKeyValue }, i) => (
      <td key={j}>{data[headKeyValue]}</td>
    ));
    return <tr key={i}>{mapKeys}</tr>;
  });
  return (
    <div className={style.table_container}>
      <div className={style.table_container_header}>
        <div>
          <button>Hello world</button>
        </div>
        <div>
          <button>Div_stuff</button>
        </div>
      </div>

      <table className={style.table}>
        <thead>
          <tr>{displayHead === false && tableHead}</tr>
        </thead>
        <tbody>{selfDisplayComponent ? displayComponent : tableBody}</tbody>
      </table>
    </div>
  );
}

export default Table;
