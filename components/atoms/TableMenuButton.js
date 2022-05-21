import React, { useState } from "react";
import TableMenuIcon from "../../images/icons/TableMenuIcon";
import atomStyle from "../../styles/atoms.module.css";
import Button from "./Buttons";
import DeleteUserIcon from "../../images/icons/DeleteUserIcon";
import ModifyUser from "../../images/icons/ModifyUser";

TableMenuButton.defaultProps = {
  iconContent: <TableMenuIcon />,
};

function TableMenuButton({ iconContent }) {
  const [open, setOpen] = useState(false);
  console.log(iconContent);

  return (
    <div className={atomStyle.table_menu_button_container}>
      <button
        className={atomStyle.table_menu_button}
        onClick={() => setOpen((prev) => !prev)}
      >
        {iconContent}
      </button>
      ;
      <div
        className={`${atomStyle.table_menu_button_container_modal} ${
          !open && atomStyle.display_none
        } border_primary border-radius-15`}
      >
        <Button size="auto" color="primary" fontSize="0.8em" margin={"10px 0"}>
          Attivo
        </Button>
        <Button size="auto" color="secondary" fontSize="0.8em">
          Attivo
        </Button>
        <hr />
        <p>
          <ModifyUser /> Modifica User
        </p>
        <p>
          <DeleteUserIcon />
          Cancella User
        </p>
      </div>
    </div>
  );
}

export default TableMenuButton;
