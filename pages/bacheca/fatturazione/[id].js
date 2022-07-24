import { useState } from "react";
import Sidebar from "../../../components/sidebar";
import Link from "next/link";

const Fatturazione = () => {
  const initialState = {
    first_name: "Desmond",
    last_name: "Ezo-Ojile",
    company_name: "MCS",
    address1: "Lagos Nigeria",
    address2: "",
    city: "Ikeja",
    state: "Lagos State",
    post_code: "23456",
    country: "Nigeria",
    phone: 12345657689,
    email: "desezo2@gmail.com",
    tax_id_code: "234in42",
    vat_number: "1233434",
    unique_code: "234343",
    pec: "2345465",
    reference_person: "Mr Frank",
    house_no: "3",
    recipient_code: "34343",
    fax: "Fax@fax",
    cap: "no CAP",
  };
  const [privateInput, setPrivateInput] = useState(true);
  const [state, setState] = useState(initialState);

  const [CODICEUNIVOCO, setCODICEUNIVOCO] = useState("86334519757");
  const [PEC, setPEC] = useState("info@diessofficial.com");

  const [CODICEDESTINATARIO, setCODICEDESTINATARIO] = useState("Noah Ekere");
  const [APTSUITE, setAPTSUITE] = useState("Roma");

  const handlePrivateInput = (event) => {
    event.preventDefault();
    setPrivateInput(!privateInput);
  };

  function onChange(e) {
    setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div className=" pt-4 pb-[5em] md:px-5 lg:px-[5em]">
      <div className="flex flex-wrap  justify-between  px-4">
        <Sidebar />
        <div className="w-1/2 min-w-[250px] text-sm">
          <form onSubmit={handleSubmit}>
            <div className="top ">
              <label>
                TIPO CLIENTE<span className="text-red-600">*</span>
              </label>
              <div className="float-right">
                <input
                  onClick={handlePrivateInput}
                  className={`mr-3 border-2 border-solid border-gray-700 rounded-3xl px-3 ${
                    privateInput && "bg-black text-white"
                  }`}
                  type={"button"}
                  value="PRIVATO"
                />
                <input
                  onClick={handlePrivateInput}
                  className={`mr-3 border-2 border-solid border-gray-700 rounded-3xl px-3 ${
                    !privateInput && "bg-black text-white"
                  }`}
                  type={"button"}
                  value="AZIENDA"
                />
              </div>
            </div>
            <div className="flex items-center justify-between my-3">
              <label>
                NOME<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                id="first_name"
                value={state.first_name}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                COGNOME<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                value={state.last_name}
                id="last_name"
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                CODICE FISCALE<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                value={state.tax_id_code}
                id="tax_id_code"
              />
            </div>
            {!privateInput && (
              <div>
                <div className="flex items-center justify-between my-3">
                  <label>RAGIONE SOCIALE</label>
                  <input
                    className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                    type={"text"}
                    onChange={onChange}
                    value={state.company_name}
                    id="company_name"
                  />
                </div>

                <div className="flex items-center justify-between my-3">
                  <label>PATITA IVA</label>
                  <input
                    className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                    type={"text"}
                    onChange={onChange}
                    value={state.vat_number}
                    id="vat_number"
                  />
                </div>

                <div className="flex items-center justify-between my-3">
                  <label>CODICE UNIVOCO</label>
                  <input
                    className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                    type={"text"}
                    onChange={onChange}
                    value={state.unique_code}
                    id="unique_code"
                  />
                </div>

                <div className="flex items-center justify-between my-3">
                  <label>PEC</label>
                  <input
                    className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                    type={"email"}
                    onChange={(e) => {
                      setPEC(e.target.value);
                    }}
                    value={PEC}
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between my-3">
              <label>
                INDIRIZZO EMAIL<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                value={state.email}
                id="email"
              />
            </div>

            {!privateInput && (
              <div className="flex items-center justify-between my-3">
                <label>CODICE DESTINATARIO</label>
                <input
                  className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                  type={"text"}
                  onChange={(e) => {
                    setCODICEDESTINATARIO(e.target.value);
                  }}
                  value={CODICEDESTINATARIO}
                />
              </div>
            )}

            <div className="flex items-center justify-between my-3">
              <label>
                PAESE?REGIONE<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                id="country"
                value={state.country}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                PROVINCA<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                value={state.state}
                id="state"
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                CITA<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                value={state.city}
                id="city"
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                INDRIZZO<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                value={state.address1}
                id="address1"
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>APT, SUITE, UNITA ecc.</label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={(e) => {
                  setAPTSUITE(e.target.value);
                }}
                value={APTSUITE}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                NUMERO CIVICO<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                id="house_no"
                value={state.house_no}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                CAP<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                value={state.cap}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                TELEFONO<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={onChange}
                value={state.phone}
                id="phone"
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>FAX</label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"info@diessofficial.com"}
                onChange={onChange}
                value={state.cap}
              />
            </div>
            {/* <Link href="/bacheca/1"> */}
            <input
              className="float-right bg-black text-white py-1 px-3 text-sm rounded-3xl"
              type={"submit"}
              value="SALVA"
            />
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fatturazione;
