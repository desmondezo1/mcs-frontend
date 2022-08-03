import Image from "next/image";
import styles from "../../styles/Home.module.css";
import arrowRight from "../../public/images/arrow_right.svg";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Washroom() {
  const router = useRouter();
  return (
    <>
      <style jsx>
        {`
          * {
            font-size: 0.7rem;
          }

          .washroomWrapper {
            display: grid;
            grid-template-columns: 50% 50%;
            width: 80%;
            height: 100vh;
          }

          .washroomText {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .washroomText .title {
            padding-bottom: 10px;
            border-bottom: 2px solid #000;
            margin-bottom: 30px;
            width: fit-content;
          }

          .text-wrapper {
            width: 70%;
            position: relative;
          }

          // .text-wrapper::after{
          //     content: "";
          //     border-right: 1px solid #999999;
          //     position: absolute;
          //     top: 0;
          //     height: 100%;
          //     bottom: 0;
          //     right: -171px;

          // }

          .washroomText,
          .washroomImages {
            margin: 50px 0;
            font-size: 0.8rem;
          }

          .washroomImages {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          .imageCard {
            margin-right: 20px;
            justify-content: unset;
            align-items: baseline;
            margin-top: 50px;
          }

          textarea {
            // min-width: 432.5px;
            min-height: 307.23px;
            border-radius: 17.3px;
            border: 1px solid #000;
            background: transparent;
            margin-bottom: 20px;
          }

          .input-wrapper {
            display: flex;
            flex-direction: row;
            width: 100%;
          }

          .input-wrapper label {
            flex-grow: 1;
            margin-right: 10px;
          }

          .input-wrapper input {
            max-width: 306.89px;
            width: 100%;
            flex-grow: 2;
            min-height: 25.63px;
            border-radius: 17.3px;
            border: 1px solid #000;
            background: transparent;
            margin-bottom: 20px;
          }

          .invia {
            margin-top: 0;
          }
          .filler {
            height: 100px;
          }
        `}
      </style>
      <div className="washroomWrapper mx-auto my-auto mt-[100px]">
        <div className="washroomText">
          <div className="text-wrapper">
            <h1 className="title">RICHIEDI UN PREVENTIVO</h1>
            <form
              className={`${styles.contactForm} ${"p-0 d-flex "}`}
              style={{
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <textarea
                className="form-control"
                placeholder="Scrivici qui!"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>

              <div className="input-wrapper">
                <label htmlFor="email"> INDIRIZZO EMAIL </label>
                <input type={"text"} name="email" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="telephone"> TELEFONO </label>
                <input type={"text"} name="telephone" />
              </div>

              <span
                className={`${styles.link_with_arrow} ${"invia d-flex w-fit"}`}
              >
                INVIA
                <Icon
                  icon="carbon:arrow-up-right"
                  style={{ fontSize: "1rem" }}
                />
              </span>
            </form>
          </div>
        </div>

        <div className="washroomImages">
          <div className={`${styles.distImageCard} ${"imageCard"}`}>
            <Link href={""}>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <a>ASSITENZA CLIENTI</a>
                <Icon
                  icon="carbon:arrow-up-right"
                  style={{ fontSize: "1rem" }}
                />
              </span>
            </Link>

            <Link href={""}>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=393893154823&app=facebook&entry_point=page_cta&fbclid=IwAR2eZdAGsGyhou8Zzlc1_FU7Z7dOqyHdB6GPDWRBimwWoS553lbjgaRCUzg"
                >
                  WHATSAPP
                </a>
                <Icon
                  icon="carbon:arrow-up-right"
                  style={{ fontSize: "1rem" }}
                />
              </span>
            </Link>

            <p className="mt-[20px]">Email: mcsprogettoigiene@gmail.com</p>
            <p>Tel: 0932 642711</p>
            <p>Cell: 3791979665 - 3395354321</p>
          </div>
        </div>

        {/* <span className={'d-flex align-item-center'} style={{
            alignItems: "center",
            position: "absolute",
            bottom: "-80px",
            left: "20px"
        }} > */}

        {/* <Icon icon="cil:arrow-left"  style={{ fontSize: '1rem', marginRight: "10px" }}/> */}
        {/* <Image src={arrowRight} height="14.4px" style={{ fontSize: '0.7rem', transform: "rotate(180deg)"}} />
            <p className='ml-1' style={{ fontSize: '0.7rem'}}> Back  </p>
        </span> */}
      </div>

      <span
        onClick={() => {
          router.back();
        }}
        className={"d-flex align-item-center"}
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: "-170px",
          left: "20px",
          cursor: "pointer",
        }}
      >
        {/* <Icon icon="cil:arrow-left"  style={{ fontSize: '1rem', marginRight: "10px" }}/> */}
        <Image
          alt=""
          src={arrowRight}
          height="14.4px"
          style={{ fontSize: "0.7rem", transform: "rotate(180deg)" }}
        />
        <p className="ml-1" style={{ fontSize: "0.7rem" }}>
          {" "}
          Back{" "}
        </p>
      </span>

      <div className="filler"></div>
    </>
  );
}
