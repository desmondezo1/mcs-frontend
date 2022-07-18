import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { updateCartList, updateCartVisibility } from "../../../stores/mySlice";
import Cart from "../../../components/cartList/cart";
import Cok from "cookie";
import { useRouter } from "next/router";
import Error from "next/error";

const Product = ({ errorCode, product: originalProductData }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(5);

  const [product, setProduct] = useState({});
  const [id, setId] = useState(3);
  const [activeTab, setActiveTab] = useState("tab2");
  const openCart = useSelector((state) => state.mySlice.openCart);

  const [dropDownOpen, setDropDownOpen] = useState(false);

  useEffect(() => {
    setProduct(originalProductData);
  }, [originalProductData]);
  const router = useRouter();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const downloadPdf = (url) => {
    setActiveTab("pdf");
    router.push(url);
    // console.log(url);
    // fetch('/api/downloadPdf',{
    //   method: 'POST',
    //   body: JSON.stringify(url)
    // })
  };

  const addToCart = (product) => {
    dispatch(
      updateCartList({
        id: product?.id,
        name: product?.title,
        price: product?.price,
        quantity: count,
      })
    );
  };

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  function changeVariation(variant) {
    console.clear();
    console.log(variant);

    setProduct({
      ...originalProductData,
      ...variant,
    });
  }
  const productionVariation = originalProductData.variation || [];

  const variationList = productionVariation.map((variant) => {
    return (
      <button onClick={() => changeVariation(variant)} key={variant.title}>
        {variant.title}
      </button>
    );
  });
  console.log(variationList);

  return (
    <>
      <style Jsx>
        {` .itemLabel{
        min-width: 200px;
      }

      .prodImage{
        z-index: 1;
      }
      `}
      </style>
      <div className="py-[5em] w-fit  md:w-[70%]  xl:w-4/5 m-auto ">
        {openCart && <Cart />}
        <div className="first my-5 pb-[6em]">
          <div className="flex flex-wrap sm:flex-nowrap justify-between ">
            <div className="left  w-fit sm:w-[250px] xl:w-fit mx-auto sm:mx-0 ">
              {product &&
                product.images &&
                product?.images[0] &&
                product?.images[0]["image"] && (
                  <Image
                    className="prodImage"
                    src={product?.images[0]["image"]}
                    alt="product"
                    width={350}
                    height={350}
                    quality={100}
                  />
                )}
            </div>
            <div className="right mr-2 w-fit md:w-full lg:w-full xl:w-fit   flex flex-col px-3 sm:px-0">
              <h1 className=" font-medium text-md md:text-lg lg:text-xl xl:text-2xl mt-2 md:mt-0">
                {product?.title}
              </h1>
              <p className="max-w-[600px] my-3 text-sm xl:text-md">
                {product?.description}
              </p>

              <div
                style={{
                  position: "relative",
                }}
              >
                <div className="flex items-center justify-between w-fit border-1 border-black border-solid rounded-3xl px-3 py-1 cursor-pointer my-3">
                  <button
                    className="text-sm pr-2"
                    onClick={() => setDropDownOpen((prev) => !prev)}
                  >
                    SCEGLI UN'OPZIONE
                  </button>
                  <span>
                    <Icon icon="carbon:arrow-down" width="20" height="20" />
                  </span>
                </div>
                {dropDownOpen && (
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "column norwap",
                    }}
                  >
                    {variationList}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between w-fit border-1 border-black border-solid rounded-3xl px-1  my-3">
                <span className="text-sm cursor-pointer hover:bg-gray-200 rounded-[50%]">
                  <Icon
                    icon="carbon:subtract"
                    width="30"
                    height="30"
                    onClick={() => setCount(count - 1)}
                  />
                </span>
                <span className="px-3">{count}</span>
                <span
                  className=" cursor-pointer hover:bg-gray-200 rounded-[50%]"
                  onClick={() => setCount(count + 1)}
                >
                  <Icon icon="carbon:add" width="30" height="30" />
                </span>
              </div>
              <div
                className="flex flex-wrap items-center justify-between mt-auto"
                onClick={() => addToCart(product)}
              >
                <a
                  className="my-4 sm:my-0"
                  onClick={() => dispatch(updateCartVisibility(true))}
                >
                  <span className=" rounded-3xl px-4 py-1 cursor-pointer text-sm bg-black text-white">
                    AGGIUNGI AL CARRELLO
                  </span>
                </a>
                <span className="border-1 border-black border-solid rounded-3xl px-4 py-1 cursor-pointer text-sm">
                  AGGIUNGI ALLA LISTA DEI DESIDERI{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="second my-4 px-3">
          <div className="tab_heading flex flex-wrap  items-center justify-between border-t-2 border-t-gray-500 border-t-solid py-2 ">
            <div
              className={`cursor-pointer text-sm   phone:my-2 sm:my-[0.5px] w-full sm:w-fit ${
                activeTab === "tab1" ? "text-gray-400" : "text-black"
              }`}
              onClick={() => handleTabChange("tab1")}
            >
              DESCRIZIONE
            </div>
            <div
              className={`cursor-pointer text-sm phone:my-3 sm:my-[0.5px] w-full sm:w-fit ${
                activeTab === "tab2" ? "text-gray-400" : "text-black"
              }`}
              onClick={() => handleTabChange("tab2")}
            >
              INFORMAZIONE AGGIUTIVE
            </div>
            {!product?.pdf ? (
              ""
            ) : (
              <div
                className={`cursor-pointer text-sm phone:my-3 sm:my-[0.5px] w-full sm:w-fit ${
                  activeTab === "pdf" ? "text-gray-400" : "text-black"
                }`}
                onClick={() => downloadPdf(product?.pdf)}
              >
                SCHEDA TECNICA
              </div>
            )}
            <div
              className={`cursor-pointer text-sm w-full sm:w-fit ${
                activeTab === "tab3" ? "text-gray-400" : "text-black"
              } flex items-center`}
              onClick={() => handleTabChange("tab3")}
            >
              <span> SPEDIZIONE E RESO</span>
              <span className="ml-2">
                {" "}
                <Icon icon="carbon:arrow-up-right" />
              </span>
            </div>
          </div>

          <div className="tab_content py-9">
            {activeTab === "tab1" && (
              <div className="tab_content_item">{product?.description}</div>
            )}

            {activeTab === "tab2" && (
              <div className="tab_content_item">
                <div className="infoWrapper d-flex w-100">
                  <div className="itemLabel ">Peso: </div>
                  <div className="itemContent">{product?.weight}</div>
                </div>

                <div className="infoWrapper d-flex w-100">
                  <div className="itemLabel">Pezzi: </div>
                  <div className="itemContent">
                    {product &&
                      product.variation &&
                      product?.variation.map((item) => {
                        return item.packaging + ", ";
                      })}
                  </div>
                </div>

                <div className="infoWrapper d-flex w-100">
                  <div className="itemLabel">Marca: </div>
                  <div className="itemContent">{product?.brand}</div>
                </div>

                <div className="infoWrapper d-flex w-100">
                  <div className="itemLabel">Usi: </div>
                  <div className="itemContent">{product?.uses}</div>
                </div>

                <div className="infoWrapper d-flex w-100">
                  <div className="itemLabel">Superficie da Trattare: </div>
                  <div className="itemContent">{product?.surface}</div>
                </div>

                <div className="infoWrapper d-flex w-100">
                  <div className="itemLabel">Confezione: </div>
                  <div className="itemContent flex-grow-3">
                    {product &&
                      product.variation &&
                      product?.variation.map((item) => {
                        return item.packaging + ", ";
                      })}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="tab_content_item">SPEDIZIONE E RESO content</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

export async function getServerSideProps({ req, params }) {
  let cook = Cok.parse(req.headers.cookie || "");
  let token = cook.token;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}product/${params?.id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const errorCode = res.ok ? false : res.status;

  const product = await res.json();
  console.log(product.data);
  return { props: { product: product.data, params, errorCode } };
}
