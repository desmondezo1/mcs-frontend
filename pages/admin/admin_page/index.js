import Head from "next/head";
import React from "react";
import Header from "../../../components/molecules/Header";
import Nav from "../../../components/molecules/Nav";
import styles from "../../../styles/Home.module.css";
import Table from "../../../components/molecules/Table";
import Button from "../../../components/atoms/Buttons";
import SearchIcon from "../../../images/icons/SearchIcon";
import AddIcon from "../../../images/icons/AddIcon";
import { adminData } from "../../../config/OverviewTable";
import ProfilePicture from "../../../images/icons/ProfilePicture";
import TableMenuIcon from "../../../images/icons/TableMenuIcon";
import MenuButton from "../../../components/atoms/TableMenuButton";
import TableMenuButton from "../../../components/atoms/TableMenuButton";

function index(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>MCP- Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header>
          <p>Dashboard</p>
        </Header>
        <div className="dashboard_container">
          <Nav />
          <div className={styles.overview_body_container}>
            <h4>User Management</h4>
            <br />
            <br />
            <Table
              headKeys={[
                "Name",
                "Roulo",
                "Data Creata",
                "Status",
                () => <AddIcon />,
              ]}
              tableData={adminData}
              displayHead={true}
              selfDisplayComponent={true}
              displayComponent={adminData.map(
                ({ name, roulo, date, status }, i) => (
                  <tr key={i}>
                    <td>
                      <ProfilePicture
                        style={{
                          marginRight: "6px",
                        }}
                      />
                      {name}
                    </td>
                    <td>{roulo}</td>
                    <td>{date}</td>
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
              <Button color="secondary" size={"auto"}>
                <p
                  style={{
                    margin: "0px",
                    marginRight: "10px",
                  }}
                  className="small_text grey_text mr-1"
                >
                  RICERCA USER
                </p>
                <SearchIcon />
              </Button>
              <Button color="secondary" size={"auto"}>
                <AddIcon />
                <p
                  style={{
                    margin: "0px",
                    marginLeft: "10px",
                  }}
                  className="small_text"
                >
                  NUOVO USER
                </p>
              </Button>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default index;
