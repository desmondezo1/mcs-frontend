import React from "react";
import NavHeader from "../../../components/molecules/NavHeader";
import Table from "../../../components/molecules/Table";
import DownArrow from "../../../images/icons/DownArrow";
import ProductListData from "../../../config/ProductListData";
import ProfilePicture from "../../../images/icons/ProfilePicture";
import TableMenuButton from "../../../components/atoms/TableMenuButton";
import Buttons from "../../../components/atoms/Buttons";
import SearchIcon from "../../../images/icons/SearchIcon";
import AddIcon from "../../../images/icons/AddIcon";
import {
  RadioButtonContainer,
  RoundedInputWithIcon,
} from "../../../components/atoms/Input";
function product_list(props) {
  return (
    <NavHeader>
      <div
        className={""}
        style={{
          width: "78%",
        }}
      >
        <h4>Lista Clienti</h4>

        <br />
        <br />
        <Table
          headKeys={[
            "No",
            "Nome",
            "Email",
            "Data Creata",
            "Status",
            () => <DownArrow />,
          ]}
          tableData={ProductListData}
          displayHead={true}
          selfDisplayComponent={true}
          displayComponent={ProductListData.map(
            ({ no, name, status, date }, i) => (
              <tr key={i}>
                <td>{no}</td>
                <td>
                  <ProfilePicture
                    style={{
                      marginRight: "6px",
                    }}
                  />
                  {name}
                </td>
                <td>{date}</td>
                <Buttons
                  size={"auto"}
                  fontSize="0.8em"
                  color={status === "Attivo" ? "Received" : "Cancelled"}
                  margin="16px 0"
                >
                  {status}
                </Buttons>
                <td>
                  <TableMenuButton />
                </td>
              </tr>
            )
          )}
        >
          <RoundedInputWithIcon
            Suffix={SearchIcon}
            placeholder="RICERCA ORDINE"
          />

          <RadioButtonContainer
            id={"FIlter"}
            name="Filter"
            showLabel={false}
            radioButtons={[
              { label: "TUTTI", value: "TUTTI" },
              { label: "ATTIVO", value: "ATTIVO" },
              { label: "BOZZA", value: "BOZZA" },
            ]}
          />
        </Table>
      </div>
    </NavHeader>
  );
}

export default product_list;
