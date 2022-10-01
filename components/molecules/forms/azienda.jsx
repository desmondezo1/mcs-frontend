import { useEffect, useState } from "react";
import { initialStateForAzienda } from "../../../const/initialFomState";

export default function Azienda({ user, submitBtn=true }) {
  const [suite, setSuite] = useState();
  const [state, setState] = useState(initialStateForAzienda);

  useEffect(() => {
    setState({ ...user, ...user?.billing });
  }, []);
  function onChange(e) {
    setState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function handleSubmit(formEvent) {
    formEvent.defaultDefault();

    console.log(state);
  }

  return (
    <>
      <style jsx>
        {`
          label {
            min-width: 30%;
          }
        `}
      </style>
      <form onSubmit={handleSubmit}>
        <div>
          <h2
            style={{
              color: "#999999",
              marginTop: "30px",
            }}
          >
            Dati di Fatturazione
          </h2>
        </div>
        <div className="flex items-center justify-between my-3">
          <label>
            PERSONA DI RIFERIMENTO*<span className="text-red-600">*</span>
          </label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type={"text"}
            value={state.first_name}
            onChange={onChange}
            id="first_name"
          />
        </div>

        <div className="flex items-center justify-between my-3">
          <label>
            RAGIONE SOCIALE*<span className="text-red-600">*</span>
          </label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type={"text"}
            value={state.last_name}
            onChange={onChange}
            id="last_name"
          />
        </div>

        <div className="flex items-center justify-between my-3">
          <label>
            CODICE FISCALE<span className="text-red-600">*</span>
          </label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type={"text"}
            onChange={onChange}
            value={state.tax_id_code}
            id="tax_id_code"
          />
        </div>

        <div className="flex items-center justify-between my-3">
          <label>
            INDIRIZZO EMAIL<span className="text-red-600">*</span>
          </label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type={"text"}
            onChange={onChange}
            value={state.email}
            id="email"
          />
        </div>

        <div className="flex items-center justify-between my-3">
          <label>CODICE DESTINATARIO</label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type={"text"}
            onChange={onChange}
            value={state.recipient_code}
            id="recipient_code"
          />
        </div>

        <div className="flex items-center justify-between my-3">
          <label>
            PAESE/REGIONE<span className="text-red-600">*</span>
          </label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type={"text"}
            onChange={onChange}
            value={state.country}
            id="country"
          />
        </div>

        <div className="flex items-center justify-between my-3">
          <label>
            PROVINCA<span className="text-red-600">*</span>
          </label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
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
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
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
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type={"text"}
            onChange={onChange}
            value={state.address1}
            id="address1"
          />
        </div>

        <div className="flex items-center justify-between my-3">
          <label>APT, SUITE, UNITÀ ecc.</label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type={"text"}
            onChange={(e) => {
              setSuite(e.target.value);
            }}
            value={suite}
          />
        </div>

        <div className="flex items-center justify-between my-3">
          <label>
            NUMERO CIVICO<span className="text-red-600">*</span>
          </label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type={"text"}
            onChange={onChange}
            value={state.house_no}
            id="house_no"
          />
        </div>

        <div className="flex items-center justify-between my-3">
          <label>
            CAP<span className="text-red-600">*</span>
          </label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
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
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type={"text"}
            onChange={onChange}
            value={state.phone}
            id="phone"
          />
        </div>

        <div className="flex items-center justify-between my-3">
          <label>FAX</label>
          <input
            className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
            type="email"
            onChange={onChange}
            value={state.fax}
            id="fax"
          />
        </div>
            {!submitBtn?"":(
              <input
                className="float-right bg-black text-white py-1 px-3 text-sm rounded-3xl"
                type={"submit"}
                value="SALVA"
              />
            )}
      </form>
    </>
  );
}
