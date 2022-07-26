// import useRouter from 'next/router'
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import distributori from "../../public/images/distributori.png";
import ACCESSORI from "../../public/images/ACCESSORI.png";
import arrowRight from "../../public/images/arrow_right.svg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { catData } from "../../config/categoryData";
import CategoryDetail from "./categoryDetail";

export default function DynamicCategories({ title }) {
  const [category, setCategory] = useState("");
  useEffect(() => {
    if (catData) {
      catData?.filter((val) => {
        if (val?.category_name.toLowerCase() === title.toLowerCase()) {
          console.log({ val });
          setCategory(val);
          return;
        }
      });
    }
  });
  const router = useRouter();
  return (
    <>
      <style jsx>
        {`
          .washroomWrapper {
            display: grid;
            grid-template-columns: auto auto;
            width: 80%;
            height: 100vh;
          }

          .washroomText .title {
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
            margin: 50px 20px 50px;
            font-size: 0.8rem;
          }

          .washroomImages {
            display: flex;
            flex-direction: row;
          }

          .imageCard {
            margin-right: 20px;
            justify-content: unset;
          }
        `}
      </style>

      <div className="washroomWrapper mx-auto my-auto mt-[100px]">
        {category?.category_description ? (
          <CategoryDetail category={category} />
        ) : (
          <>
            <div className="washroomText">
              <div className="text-wrapper">
                <h1 className="title">
                  {category?.category_name
                    ? category?.category_name
                    : "WASHROOM"}
                </h1>
                {!category?.category_summary ? (
                  ""
                ) : (
                  <p> {category?.category_summary}</p>
                )}
              </div>
            </div>

            <div className="washroomImages">
              {category?.children?.length > 0
                ? category?.children.map((child, index) => {
                    return (
                      <div
                        key={index}
                        className={`${styles.distImageCard} ${"imageCard"}`}
                      >
                        <Image src={distributori} alt="" />
                        <div>
                          <span
                            className={"d-flex"}
                            onClick={() => {
                              router.push(`${child?.category_name}`);
                            }}
                          >
                            <p className="mr-1">
                              {" "}
                              {child?.category_name
                                ? child?.category_name
                                : "DISTRIBUTORI"}{" "}
                            </p>
                            <Image alt="" src={arrowRight} height="14.4px" />
                          </span>
                        </div>
                      </div>
                    );
                  })
                : "No children"}
            </div>
          </>
        )}

        <span
          onClick={() => {
            router.back();
          }}
          className={"d-flex align-item-center"}
          style={{
            alignItems: "center",
            position: "absolute",
            bottom: "-80px",
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
      </div>
    </>
  );
}
