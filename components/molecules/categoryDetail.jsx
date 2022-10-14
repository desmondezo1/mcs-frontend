import Image from "next/image";
import LAVASCIUGA from "../../public/images/LAVASCIUGA.png";
import arrowRight from "../../public/images/arrow_right.svg";
import Link from "next/link";

export default function CategoryDetail({ category }) {
  return (
    <>
      <style jsx>
        {`
          .washroomWrapper {
            display: grid;
            grid-template-columns: 30% 70%;
            width: 80%;
            grid-gap: 6%;
            height: 100vh;
          }

          .title {
            padding-bottom: 10px;
            border-bottom: 2px solid #000;
            margin-bottom: 30px;
            width: fit-content;
          }

          .text-wrapper {
            max-width: 300px;
          }

          .washroomText,
          .washroomImages {
            // margin: 50px 0;
            font-size: 0.8rem;
          }

          .washroomImages {
            display: flex;
            flex-direction: column;
          }

          .imageCard {
            margin-right: 20px;
            justify-content: unset;
            align-items: baseline;
            margin-top: 50px;
          }

          img {
            min-height: 290px;
          }
          @media only screen and (max-width: 768px) {
            .washroomWrapper {
              display: grid;
              grid-template-columns: 100%;
              width: 80%;
              grid-gap: 6%;
              height: auto;
            }
          }
        `}
      </style>

      <div className="washroomWrapper mx-auto my-auto">
        <div className="washroomText">
          <h1 className="title">
            {!category?.category_name
              ? "TAPPETI PERSONALIZZATI"
              : category?.category_name}
          </h1>
          <div className="text-wrapper">
            <div className="washroomImages">
              <img src={"/prod/" + category.image} alt="" />
            </div>
          </div>
        </div>
        <div className="washroomText mt-[50px]">
          <p>
            {category?.category_description
              ? category.category_description
              : ""}
          </p>

          <div
            className={"d-flex"}
            style={{
              marginTop: "30px",
              border: "1px solid #000",
              borderRadius: "20px",
              padding: "2px 15px",
              cursor: "pointer",
              padding: "2px 10px",
              width: "fit-content",
              fontSize: "0.7rem",
            }}
          >
            <Link href={"/request-quote"}>
              <span className={"d-flex"}>
                <p className="mr-1"> RICHIEDI UN PREVENTIVO </p> &nbsp;&nbsp;
                <Image alt="" src={arrowRight} height="14.4px" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
