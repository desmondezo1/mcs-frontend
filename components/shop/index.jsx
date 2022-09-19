/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  updateCartList,
  updateFavouriteList,
  updateCartVisibility,
  removeFavouriteList,
} from "../../stores/mySlice";
import Api from "../../stores/StoreAPI";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const ShopList = ({ product }) => {
  const activeUser = JSON.parse(Cookies.get("user") || "{}");
  const id = activeUser["id"];
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const router = useRouter();

  const { favouriteList } = useSelector((state) => state.mySlice);

  const addToCart = ({ id, title, price, photo, weight }, quantity) => {
    dispatch(
      updateCartList({
        id,
        name: title,
        price,
        photo,
        quantity,
        weight
      })
    );

    dispatch(updateCartVisibility(true));
    fetch(process.env.NEXT_PUBLIC_APP_URL + "addToCart", {
      method: "POST",
      body: JSON.stringify({
        id,
        title,
        price,
        quantity,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log({ res }));

    toast.success("Artículo añadido al carrito");
  };

  const inFav = favouriteList.find((d) => d.title === product?.title);

  return (
    <>
      <style jsx>
        {`
          .image,
          .prod-wrapper > span,
          .prod-wrapper img {
            border-radius: 11.38px;
          }
        `}
      </style>

      <div className="w-[250px] sm:w-[200px] cursor-pointer prod-wrapper">
        <Link href={`/shop/product/${product?.id}`}>
          <Image
            alt="orders"
            className="image"
            src={product?.photo}
            width={250}
            height={250}
            quality={100}
          />
        </Link>
        <p className="sm:w-[170px] my-2 text-sm">{product?.title}</p>
        <p className="text-sm text-red-600">€{product?.price}</p>

        <div className="icons flex items-center mt-2">
          <span
            onClick={() => {
              addToCart(product, 1);
            }}
          >
            <Icon icon="carbon:shopping-cart" />
          </span>

          <button
            className="ml-2"
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
                    toast.error("Si è verificato un errore");
                  });
              }
              fetch(process.env.NEXT_PUBLIC_APP_URL + `user/${id}/wishlist`, {
                method: "POST",
                body: JSON.stringify({
                  product_id: product?.id,
                }),
                headers: {
                  "Content-type": "application/json;charset=UTF-8",
                  Authorization: `Bearer ${token}`,
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((res) => {
                  if (res.status === 401) {
                    toast.error("non autorizzato");
                    router.push("/accedi-registrati");
                  }
                  if (res.status === 200) {
                    toast.success("aggiunto alla lista dei desideri");
                    dispatch(updateFavouriteList(product, product?.id));
                    // router.success("aggiunto alla lista dei desideri");
                  }
                })
                .catch((e) => {
                  toast.error("Si è verificato un errore");
                });
            }}
          >
            {/* <img
              src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png"
              style={{ color: "black" }}
              width={18}
              height={18}
              alt=""
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-heart"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill={inFav ? "black" : "none"}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
            </svg>
            <Icon icon="carbon:heart" color="red" />
          </button>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default ShopList;
