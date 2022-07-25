import { Icon } from "@iconify/react";

const Mepa = () => {
  return (
    <>
      <style jsx>
        {`
      *{
        font-family:  'Almarai', sans-serif;
      }
      .mepaWrapper{
        display: grid;
        grid-template-columns: 30% 70%;
        width:80%;
        margin: 20px 10%;
        font-size: 0.7rem;
      }

      .button{BB
        width: fit-content;
        font-size: 0.7rem;
      }

      .mepa-title{
        font-size: 1.69rem;
      }
      
      `}
      </style>
      <div className="bg-[#1E3F7F] text-white py-9 h-[100vh] border-b border-solid">
        <div className=" mepaWrapper">
          <div className="left min-w-fit">
            <h1 className="mepa-title">
              <span className="border-b border-gray-300 border-solid">
                {" "}
                MEPA{" "}
              </span>
            </h1>
          </div>
          <div className="right">
            <div className="text-sm w-[650px] md:mt-0 mt-3 px-2 mx-auto">
              <p>
                Il Mercato Elettronico della PA (MEPA) è uno strumento di
                Procurement pubblico, avviato nel 2000 e gestito da Consip S.p.A
                per conto del Ministero Economia e Finanze, avente il fine di
                promuovere un nuovo modello per l'ottimizzazione deli
                approvvigionamenti pubblici.
              </p>
              <p className="my-3">
                {" "}
                In particolare, il MEPA è un mercato interamente virtuale in cui
                le Amministrazioni acquirenti ed i potenziali fornitori si
                incontrano, negoziano e perfezionano online contratti di
                fornitura legalmente validi grazie all'utilizzo della firma
                digitale.
              </p>
              <p className="my-3">
                Sul MEPA, per valori inferiori alla soglia comunitaria, le PA
                possono cercare, confrontare ed acquisire i beni ed i servizi
                proposti dalle aziende "abilitate" a presentare i propri
                cataloghi sul sistema, nel rispetto di formati standard e
                secondo le regole e le condizioni definite da Consip per ciascun
                bando merceologico di abilitazione.
              </p>
              <p>
                Gli acquisti della PA possono essere effettuati secondo 3
                modalità: Ordine diretto (ODA): acquisto diretto da catalogo, in
                base all offerte pubblicate dai fornitori; Richiesta di offerta
                (Rd): modalità di negoziazione grazie alla quale
                l'Amministrazione può richiedere ai fornitori offerte
                personalizzate sulla base di specifiche esigenze; Trattativa
                diretta: modalità di negoziazione, semplificata rispetto alla
                DO, rivolta ad un unico operator economico.
              </p>
              <a
                href="https://www.acquistinretepa.it/opencms/opencms/index.html?force=true&bmctx=5CDA32EAAC544187592B9449D631082E133214C51D1699D897164285A802FDF4&contextType=external&username=string&OverrideRetryLimit=1&contextValue=%2Foam&password=secure_string&challenge_url=https%3A%2F%2Fwww.acquistinretepa.it%2Fopencms%2Fopencms%2Findex.html%3Fforce%3Dtrue&request_id=-5190430132355902309&authn_try_count=0&locale=en_US&resource_url=https%253A%252F%252Fwww.acquistinretepa.it%252Fopencms%252Fopencms%252Frisultati_ricerche.html"
                target={"_blank"}
                rel="noreferrer"
                className="button d-flex text-sm border rounded-3xl mt-5 py-1 px-3 items-center hover:text-gray-300"
                style={{
                  width: "fit-content",
                }}
              >
                <div>VISITA IL NOSTRO CATALOGO MEPA</div>
                <div className="ml-3">
                  <Icon
                    icon="carbon:arrow-right"
                    style={{ fontSize: "1.2rem" }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mepa;
