import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../../components/molecules/Header";
import Nav from "../../../components/molecules/Nav";
import styles from "../../../styles/Home.module.css";
import Table from "../../../components/molecules/Table";
import ClientList from "../../../config/ClientList";
import Button from "../../../components/atoms/Buttons";
import TableMenuIcon from "../../../images/icons/TableMenuIcon";
import Cok from 'cookie'
import ProfilePicture from "../../../images/icons/ProfilePicture";
import SearchIcon from "../../../images/icons/SearchIcon";
import routeConfig from "../../../config/routeConfig";
import axiosHttp from "../../../utility/httpCalls";
import {
  RadioButtonContainer,
  RoundedInputWithIcon,
} from "../../../components/atoms/Input";
import TableMenuButton from "../../../components/atoms/TableMenuButton";
import NavHeader from "../../../components/molecules/NavHeader";

function Index({users}) {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(ClientList);
    console.log(ClientList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const newData = ClientList.filter((item) => {
      return filter === "none" ? true : item.status === filter;
    });
    // setData(newData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  console.log(data);
  return (
    <NavHeader>
      <div className={styles.overview_body_container}>
        <div className={styles.overview_body_container}>
          <h4>Lista Clienti</h4>
          <br />
          <Table
            headKeys={["No", "Nome", "Email", "Data Creata", "Status", ""]}
            tableData={users}
            displayHead={true}
            selfDisplayComponent={users}
            display
            displayComponent={users.map(
              ({ id, first_name, email, status, created_at }, i) => (
                <tr key={i}>
                  <td>{id}</td>
                  <td>
                    <ProfilePicture
                      style={{
                        marginRight: "6px",
                      }}
                    />
                    {first_name}
                  </td>
                  <td>{email}</td>
                  <td>{created_at}</td>

                  <Button
                    size={"auto"}
                    fontSize="0.8em"
                    color={status === "Attivo" ? "Received" : "Cancelled"}
                    margin="16px 0"
                  >
                    {status}
                  </Button>
                  <td>
                    <TableMenuButton />
                  </td>
                </tr>
              )
            )}
          >
            <RoundedInputWithIcon
              Suffix={SearchIcon}
              placeholder="RICERCA CLIENTI"
            />

            <RadioButtonContainer
              id={"FIlter"}
              name="Filter"
              showLabel={false}
              changeState={setFilter}
              radioButtons={[
                { label: "TUTTI", value: "TUTTI" },
                { label: "CATEGORIA 1", value: "CATEGORIA 1" },
                { label: "CATEGORIA 2", value: "CATEGORIA 2" },
              ]}
            />
          </Table>
        </div>
      </div>
    </NavHeader>
  );
}

export default Index;


export async function getServerSideProps({req, res}) {

  let cook = Cok.parse( req.headers.cookie )|| '';
  let token = cook.token;
  const usersUrl = routeConfig.getUsers;
  let users = await axiosHttp(usersUrl,null,'GET',token);
  console.log({users});
  return { props: { users } }
}
