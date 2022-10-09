import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Sidebar from "../../../components/sidebar";
import { initialState } from "../../../const/initialFomState";
import Cookies from "js-cookie";

const Spedizione = () => {
  const [state, setState] = useState(initialState);
  const [APTSUITE, setAPTSUITE] = useState("");
  const token = Cookies.get("token");

  const activeUser = JSON.parse(Cookies.get("user") || "{}");
  const id = activeUser["id"];
  const router = useRouter();

  useEffect(() => {
    setState(initialState);

    fetch(process.env.NEXT_PUBLIC_APP_URL + `user/${id}/billing-address`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setState((prev) => ({
          ...prev,
          ...res.data,
          address1: res.data?.address1,
        }));
        setAPTSUITE(res.data?.aptsuite);
        // router.push("/bacheca/" + id);
      });
  }, []);
  function onChange(e) {
    setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formToRequest = { ...state, aptsuite: APTSUITE, is_company: Number(0) };

    fetch(process.env.NEXT_PUBLIC_APP_URL + `user/${id}/billing-address`, {
      method: "PATCH",
      body: JSON.stringify(formToRequest),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.status === 200) router.push("/bacheca/" + id);
      });
  }
  return (
    <div className=" pt-4 pb-[5em] md:px-5 lg:px-[5em]">
      <div className="flex flex-wrap  justify-between  px-4">
        <Sidebar />
        <div className="w-1/2 min-w-[250px] text-sm">
          <form onSubmit={handleSubmit}>
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
                type={"text"}
                onChange={onChange}
                value={state.pec}
                id="pec"
              />
            </div>

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
                CITTÀ<span className="text-red-600">*</span>
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
                INDIRIZZO<span className="text-red-600">*</span>
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
              <label>APT, SUITE, UNITÀ ecc.</label>
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

            <input
              className="float-right bg-black text-white py-1 px-3 text-sm rounded-3xl"
              type={"submit"}
              value="SALVA"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Spedizione;
