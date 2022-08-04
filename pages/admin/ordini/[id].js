import styles from "../../../styles/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routeConfig from "../../../config/routeConfig";
import NavHeader from "../../../components/molecules/NavHeader";
import style from "../../../styles/table.module.css";
import productCss from "../../../styles/prodotti/prodotti.module.css";

export default function OrdiniDetails(params) {
    return (<>
        <NavHeader>
      <div className={styles.overview_body_container}>
        <div className={styles.overview_body_container}>
          <h4>Visualizza Dettagli</h4>
          <br />
            <div className={style.table_container}>
            <div className={productCss.formInputSection}>
                <h3 className={productCss.formSectionH3}>
                Dettagli Ordine
                </h3>
                    <div className={productCss.formInputWrapper}>
                        <div className={productCss.input}>
                            <ul style={{
                                marginLeft: "0px",
                                paddingLeft: "0px"
                            }}>
                                <li>Numero Ordine: 500</li>
                                <li>Data: 7 Marzo 2022</li>
                                <li>Indirizzo Email: designbynoah99@gmail.com</li>
                                <li>Totale: €113.25</li>
                                <li>Metodo di Pagamento: Carta di Credito</li>
                            </ul>
                        </div>

                        <div className={productCss.input}>
                            <table>
                                <th style={{
                                    color: "#999999",
                                    fontSize: "0.9rem",
                                    fontWeight: "500"
                                }}>Prodotti</th>
                                <tr class={'proditemlist'} style={{
                                    borderTop: "1px solid #999999",
                                    borderBottom: "1px solid #999999",
                                }}>
                                    <td style={{
                                        padding: "10px 0px"
                                    }}>Sany Mayer 400 ml </td>
                                    <td>€7,55</td>
                                    <td>€37,75</td>
                                </tr>
                                <tr class={'proditemlist'} style={{
                                    borderTop: "1px solid #999999",
                                    borderBottom: "1px solid #999999",
                                }}>
                                    <td style={{
                                        padding: "10px 0px"
                                    }}>Sany Mayer 400 ml </td>
                                    <td>€7,55</td>
                                    <td>€37,75</td>
                                </tr>


                                <div style={{height: "20px"}}></div>
                                <tr style={{
                                    marginTop: "20px"
                                }}>
                                    <td> </td>
                                    <td>Subtotale</td>
                                    <td>€113.25</td>
                                </tr>
                                <tr>
                                    <td> </td>
                                    <td>Sconto</td>
                                    <td>€113.25</td>
                                </tr>
                                <tr>
                                    <td> </td>
                                    <td>IVA (22%)</td>
                                    <td>€113.25</td>
                                </tr>
                                <tr>
                                    <td> </td>
                                    <td>Spedizione</td>
                                    <td>€113.25</td>
                                </tr>
                                <div style={{height:"20px"}}></div>
                                <tr  style={{
                                    borderTop: "1px solid #999999",
                                    borderBottom: "1px solid #999999",
                                }}>
                                    <td></td>
                                    <td style={{
                                        padding: "20px 0px",
                                        fontSize: "1.2rem"
                                    }}>Totale</td>
                                    <td>€113.25</td>
                                </tr>
                            </table>
                        </div>

                        <div className={productCss.input}>
                            <ul>
                                <li>Dati di Spedizione</li>
                                <li>Noah Ekene Osas</li>
                                <li>Via Alberti Lamborghini</li>
                                <li>Via Alberti Lamborghini</li>
                                <li>18775</li>
                                <li>Roma</li>
                                <li>Roma</li>
                                <li>333 446 2789</li>
                                <li>info@dlessofficial.com</li>
                                <li>SSNNNGLKNAHLK32850</li>
                            </ul>
                        




                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </NavHeader>
    
    
    </>)
}