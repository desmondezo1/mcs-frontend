import React from "react";
import style from "../../styles/table.module.css";

function Table({ table }) {
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
          <tr>
            <th>NO</th>
            <th>Prodotto</th>
            <th>Categoria</th>
            <th>image.png</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ken’s Luxury Detergent</td>
            <td>Interni ed Esterni</td>
            <td>10.05.2022</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
