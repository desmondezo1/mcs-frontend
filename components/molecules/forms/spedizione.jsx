import { useEffect, useState } from "react";

export default function SpedizioneForm({ user, onChange, state, setState, submitBtn=true}) {
  const [suite, setSuite] = useState();

  useEffect(() => {
    setState({ ...user, ...user?.billing });
    setSuite(user?.billing?.aptsuite);
  }, [user]);

  return (
    <>
      <style jsx>
        {`
          label {
            min-width: 30%;
          }
        `}
      </style>
      {/* <form> */}
      <div>
        <h2
          style={{
            color: "#999999",
            marginTop: "30px",
          }}
        >
          Dati di Spedizione
        </h2>
      </div>
      <div className="flex items-center justify-between my-3">
        <label>
          NOME<span className="text-red-600">*</span>
        </label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="first_name"
          value={state?.first_name}
          onChange={onChange}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>
          COGNOME<span className="text-red-600">*</span>
        </label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="last_name"
          value={state?.last_name}
          onChange={onChange}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>
          CODICE FISCALE<span className="text-red-600">*</span>
        </label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="tax_id_code"
          onChange={onChange}
          value={state?.tax_id_code}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>
          INDIRIZZO EMAIL<span className="text-red-600">*</span>
        </label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="email"
          onChange={onChange}
          value={state?.email}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>CODICE DESTINATARIO</label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="recipient_code"
          onChange={onChange}
          value={state?.recipient_code}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>
          PAESE?REGIONE<span className="text-red-600">*</span>
        </label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="country"
          onChange={onChange}
          value={state?.country}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>
          PROVINCA<span className="text-red-600">*</span>
        </label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="state"
          onChange={(e) => {
            onChange(e);
          }}
          value={state?.state}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>
          CITTÀ<span className="text-red-600">*</span>
        </label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="city"
          onChange={onChange}
          value={state?.city}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>
          INDIRIZZO<span className="text-red-600">*</span>
        </label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="address1"
          onChange={onChange}
          value={state?.address1}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>APT, SUITE, UNITÀ ecc.</label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="suite"
          onChange={(e) => {
            setSuite(e?.target?.value);
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
          name="house_no"
          value={state?.house_no}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>
          CAP<span className="text-red-600">*</span>
        </label>
        <input
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          name="cap"
          onChange={onChange}
          value={state?.cap}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>
          TELEFONO<span className="text-red-600">*</span>
        </label>
        <input
          name="phone"
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"text"}
          onChange={onChange}
          value={state?.phone}
        />
      </div>

      <div className="flex items-center justify-between my-3">
        <label>FAX</label>
        <input
          name="fax"
          className="w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
          type={"info@diessofficial.com"}
          onChange={onChange}
          value={state?.fax}
        />
      </div>
          {!submitBtn?"":(
        <input
          className="float-right bg-black text-white py-1 px-3 text-sm rounded-3xl"
          type={"submit"}
          value="SALVA"
        />
          )}


      {/* </form> */}
    </>
  );
}
