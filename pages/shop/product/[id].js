import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCartList,
  updateCartVisibility,
  updateFavouriteList,
  removeFavouriteList,
} from "../../../stores/mySlice";
import Cart from "../../../components/cartList/cart";
import Cok from "cookie";
import { useRouter } from "next/router";
import Error from "next/error";
import digitToString from "../../../const/digitToString";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// console.log(digitToString);
const Product = ({ errorCode, product: originalProductData }) => {
  // console.log("digit To String", );

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const [product, setProduct] = useState({});
  const [id, setId] = useState(3);
  const [activeTab, setActiveTab] = useState("tab2");
  const openCart = useSelector((state) => state.mySlice.openCart);

  const [dropDownOpen, setDropDownOpen] = useState(false);

  const activeUser = JSON.parse(Cookies.get("user") || "{}");
  const userId = activeUser["id"];
  const token = Cookies.get("token");
  const router = useRouter();

  const { favouriteList } = useSelector((state) => state.mySlice);
  const inFav = favouriteList.find((d) => d.title === product?.title);

  console.log(originalProductData);
  useEffect(() => {
    if (Number(activeUser?.role) >= 3) {
      const variation = originalProductData?.variation?.map((data) => ({
        ...data,
        price: data.offer_price,
      }));

      setProduct({
        ...originalProductData,
        price: originalProductData.offer_price,
        variation: variation,
      });
    } else {
      setProduct(originalProductData);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalProductData]);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const downloadPdf = (url) => {
    setActiveTab("pdf");
    router.push(url);
  };

  console.log("Original Image", originalProductData);
  const addToCart = (product) => {
    dispatch(
      updateCartList({
        ...originalProductData,
        id: product?.id,
        name: product?.title,
        price: activeUser?.role === 3 ? product?.offer_price : product?.price,
        quantity: count,
        weight: product?.weight,
      })
    );
  };

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  function changeVariation(variant) {
    console.log("Changing variant : ", variant);
    setProduct({
      ...originalProductData,
      weight: variant?.weight,
      volume: variant?.volume,
      price:
        Number(activeUser?.role) >= 3 ? variant?.offer_price : variant.price,
    });
  }
  const productionVariation = originalProductData.variation || [];

  const variationList = productionVariation.map((variant, index) => {
    const position = digitToString(index + 1);
    return (
      <button onClick={() => changeVariation(variant)} key={variant.title}>
        {variant.packaging}
      </button>
    );
  });

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
                  flexFlow: "column",
                }}
                className="flex items-center justify-between w-fit border-1 border-black border-solid rounded-3xl px-3 py-1 cursor-pointer my-3"
              >
                <div className="flex items-center justify-between w-fit  border-solid rounded-3xl px-3  cursor-pointer my-1">
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
                      flexFlow: "column",
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
                <button
                  className="border-1 border-black border-solid rounded-3xl px-4 py-1 cursor-pointer text-sm"
                  onClick={() => {
                    if (!token) {
                      toast.error("accesso non effettuato");
                      return;
                    }

                    if (inFav) {
                      return fetch(
                        process.env.NEXT_PUBLIC_APP_URL + `user/${id}/wishlist`,
                        {
                          method: "DELETE",
                          body: JSON.stringify({
                            product_id: product?.id,
                          }),
                          headers: {
                            "Content-type": "application/json;charset=UTF-8",
                            Authorization: `Bearer ${token}`,
                          },
                        }
                      )
                        .then((res) => {
                          return res.json();
                        })
                        .then((res) => {
                          if (res.status === 401) {
                            toast.error("non autorizzato");
                            router.push("/accedi-registrati");
                          }
                          if (res.status === 200) {
                            toast.success(
                              "il prodotto è stato rimosso dalla lista dei desideri"
                            );
                            return dispatch(removeFavouriteList(product));
                          }
                        })
                        .catch((e) => {
                          console.log(e);
                          toast.error("Si è verificato un errore");
                        });
                    }

                    fetch(
                      process.env.NEXT_PUBLIC_APP_URL + `user/${id}/wishlist`,
                      {
                        method: "POST",
                        body: JSON.stringify({
                          product_id: product?.id,
                        }),
                        headers: {
                          "Content-type": "application/json;charset=UTF-8",
                          Authorization: `Bearer ${token}`,
                        },
                      }
                    )
                      .then((res) => {
                        return res.json();
                      })
                      .then((res) => {
                        if (res.status === 401) {
                          toast.error("non autorizzato");
                          router.push("/accedi-registrati");
                        }
                        if (res.status === 200) {
                          dispatch(updateFavouriteList(product, product?.id));
                          toast.success("aggiunto alla lista dei desideri");
                        }
                      })
                      .catch((e) => {
                        console.log(e);
                        toast.error("Si è verificato un errore");
                      });
                  }}
                  style={{
                    background: inFav ? "#0000002e" : "none",
                  }}
                >
                  AGGIUNGI ALLA LISTA DEI DESIDERI{" "}
                </button>
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
              onClick={() => router.push("/private-policy")}
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
                  <div className="itemLabel ">prezzo: </div>
                  <div className="itemContent">{product?.price}</div>
                </div>

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
                    {product && product?.volume}
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
  try {
    let cook = Cok.parse(req.headers.cookie || "");
    let token = cook.token;

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
  } catch (error) {
    console.log(error);
    return { props: { product: {}, params: {}, errorCode: 500 } };
  }
}
