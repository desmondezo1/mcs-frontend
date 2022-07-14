import { useState } from "react";
import Sidebar from "../../../components/sidebar";
import Link from "next/link";

const Fatturazione = () => {
  const [privateInput, setPrivateInput] = useState(true);

  const [Nome, setNome] = useState("Noah Ekere");
  const [COGNOME, setCOGNOME] = useState("Osas");
  const [CODICEFISCALE, setCODICEFISCALE] = useState("SSNNNGLKNAHLK32850");
  const [RAGIONE, setRAGIONE] = useState("DLESS");
  const [PATITAIVA, setPATITAIVA] = useState("86334519757");
  const [CODICEUNIVOCO, setCODICEUNIVOCO] = useState("86334519757");
  const [PEC, setPEC] = useState("info@diessofficial.com");
  const [INDIRIZZOEMAIL, setINDIRIZZOEMAIL] = useState(
    "info@diessofficial.com"
  );
  const [CODICEDESTINATARIO, setCODICEDESTINATARIO] = useState("Noah Ekere");
  const [REGIONE, setREGIONE] = useState("Italia");
  const [PROVINCA, setPROVINCA] = useState("Roma");
  const [CITA, setCITA] = useState("Roma");
  const [INDRIZZO, setINDRIZZO] = useState("Via Alberti Lamborghini");
  const [APTSUITE, setAPTSUITE] = useState("Roma");
  const [NUMERO, setNUMERO] = useState(55);
  const [CAP, setCAP] = useState(18775);
  const [TELEFONO, setTELEFONO] = useState("333 446 2789");
  const [FAX, setFAX] = useState("55");

  const handlePrivateInput = (event) => {
    event.preventDefault();
    setPrivateInput(!privateInput);
  };

  return (
    <div className=" pt-4 pb-[5em] md:px-5 lg:px-[5em]">
      <div className="flex flex-wrap  justify-between  px-4">
        <Sidebar />
        <div className="w-1/2 min-w-[250px] text-sm">
          <form>
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
                  type={"submit"}
                  value="PRIVATO"
                />
                <input
                  onClick={handlePrivateInput}
                  className={`mr-3 border-2 border-solid border-gray-700 rounded-3xl px-3 ${
                    !privateInput && "bg-black text-white"
                  }`}
                  type={"submit"}
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
                onChange={(e) => {
                  setNome(e.target.value);
                }}
                value={Nome}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                COGNOME<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={(e) => {
                  setCOGNOME(e.target.value);
                }}
                value={COGNOME}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                CODICE FISCALE<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                value={CODICEFISCALE}
              />
            </div>
            {!privateInput && (
              <div>
                <div className="flex items-center justify-between my-3">
                  <label>RAGIONE SOCIALE</label>
                  <input
                    className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                    type={"text"}
                    onChange={(e) => {
                      setRAGIONE(e.target.value);
                    }}
                    value={RAGIONE}
                  />
                </div>

                <div className="flex items-center justify-between my-3">
                  <label>PATITA IVA</label>
                  <input
                    className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                    type={"text"}
                    onChange={(e) => {
                      setPATITAIVA(e.target.value);
                    }}
                    value={PATITAIVA}
                  />
                </div>

                <div className="flex items-center justify-between my-3">
                  <label>CODICE UNIVOCO</label>
                  <input
                    className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                    type={"text"}
                    onChange={(e) => {
                      setCODICEUNIVOCO(e.target.value);
                    }}
                    value={CODICEUNIVOCO}
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
                onChange={(e) => {
                  setINDIRIZZOEMAIL(e.target.value);
                }}
                value={INDIRIZZOEMAIL}
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
                onChange={(e) => {
                  setREGIONE(e.target.value);
                }}
                value={REGIONE}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                PROVINCA<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={(e) => {
                  setPROVINCA(e.target.value);
                }}
                value={PROVINCA}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                CITA<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={(e) => {
                  setCITA(e.target.value);
                }}
                value={CITA}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                INDRIZZO<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={(e) => {
                  setINDRIZZO(e.target.value);
                }}
                value={INDRIZZO}
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
                onChange={(e) => {
                  setNUMERO(e.target.value);
                }}
                value={NUMERO}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                CAP<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={(e) => {
                  setCAP(e.target.value);
                }}
                value={CAP}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>
                TELEFONO<span className="text-red-600">*</span>
              </label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"text"}
                onChange={(e) => {
                  setTELEFONO(e.target.value);
                }}
                value={TELEFONO}
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <label>FAX</label>
              <input
                className="w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3"
                type={"info@diessofficial.com"}
                onChange={(e) => {
                  setFAX(e.target.value);
                }}
                value={FAX}
              />
            </div>
            <Link href="/bacheca/1">
              <input
                className="float-right bg-black text-white py-1 px-3 text-sm rounded-3xl"
                type={"submit"}
                value="SALVA"
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fatturazione;
