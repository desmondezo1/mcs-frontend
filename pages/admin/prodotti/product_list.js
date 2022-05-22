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
import Cok from 'cookie'
import routeConfig from '../../../config/routeConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

import {
  RadioButtonContainer,
  RoundedInputWithIcon,
} from "../../../components/atoms/Input";

function product_list({productListData}) {
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
            // "Email",
            "Data Creata",
            "Status",
            () => <DownArrow />,
          ]}
          tableData={productListData}
          displayHead={true}
          selfDisplayComponent={true}
          displayComponent={productListData.map(
            ({ id, title, status, updated_at }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>
                  <ProfilePicture
                    style={{
                      marginRight: "6px",
                    }}
                  />
                  {title}
                </td>
                <td>{updated_at}</td>
                <Buttons
                  size={"auto"}
                  fontSize="0.8em"
                  color={status === "published" ? "Received" : "Cancelled"}
                  margin="16px 0"
                >
                  {status === "published" ? "Attivo" : "Bozza"}
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

export async function getServerSideProps({req, res}) {

  // let token = req.headers.Cookies || '';
 let cook = Cok.parse( req.headers.cookie )|| '';
 let token = cook.token;
  const productsUrl = routeConfig.getProducts;
  
  const axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
      }
    }

    let axPrdt = await axios.get(
      productsUrl,
        axiosConfig
    );

   

    let prdtResult = await axPrdt;

    console.log({'cat': prdtResult.data.data});
    let productListData = [];

    if(prdtResult.data.data){
      productListData = prdtResult.data.data;
    }
  
  // Pass data to the page via props
  return { props: { productListData } }
}

