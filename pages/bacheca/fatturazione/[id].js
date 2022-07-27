import { useState } from "react";
import Sidebar from "../../../components/sidebar";
import Link from "next/link";
import { initialState } from "../../../const/initialFomState";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Fatturazione = () => {
  const [privateInput, setPrivateInput] = useState(true);
  const [state, setState] = useState(initialState);

  const [APTSUITE, setAPTSUITE] = useState("Roma");
  const token = Cookies.get("token");
  const router = useRouter();

  const activeUser = Cookies.get("user");
  const userId = JSON.parse(activeUser || "{}").id;

  const handlePrivateInput = (event) => {
    event.preventDefault();
    setPrivateInput(!privateInput);
  };

  function onChange(e) {
    setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formToRequest = { ...state, is_company: Number(privateInput) };
    fetch(process.env.NEXT_PUBLIC_APP_URL + `user/${userId}/billing-address`, {
      method: "POST",
      body: formToRequest,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        res.json();
        router.push("/bacheca/1");
      })
      .then((res) => console.log(res));
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
                    onChange={onChange}
                    value={state.pec}
                    id="pec"
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
                  onChange={onChange}
                  value={state.recipient_code}
                  id="recipient_code"
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
                id="cap"
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
                value={state.fax}
                id="fax"
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
