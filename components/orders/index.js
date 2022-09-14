import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {
  updateCartList,
  updateFavouriteList,
  updateCartVisibility,
  removeFavouriteList,
} from "../../stores/mySlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { Icon } from "@iconify/react";

const Orders = ({ item }) => {
  const activeUser = JSON.parse(Cookies.get("user") || "{}");
  const id = activeUser["id"];
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const router = useRouter();
  const { favouriteList } = useSelector((state) => state.mySlice);
  const inFav = favouriteList.find((d) => d.title === item?.title);

  return (
    <Link href={`/shop/product/${item?.id}`}>
      <div className="w-[200px] cursor-pointer">
        <Image
          alt="orders"
          src={item?.photo}
          width={200}
          height={200}
          quality={100}
        />
        <p className="w-[170px] my-2 text-sm">{item?.title}</p>
        <p className="text-sm text-red-600">{item?.price}</p>
        <div className="icons flex items-center mt-2">
          <Link href="#">
            <a>
              <Icon icon="carbon:shopping-cart" />
            </a>
          </Link>
          <button
            onClick={(e) => {
              e.stopPropagation();
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
                      product_id: item?.id,
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
                      return dispatch(removeFavouriteList(item));
                    }
                  })
                  .catch((e) => {
                    toast.error("Si è verificato un errore");
                  });
              }
              fetch(process.env.NEXT_PUBLIC_APP_URL + `user/${id}/wishlist`, {
                method: "POST",
                body: JSON.stringify({
                  product_id: item?.id,
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
                    dispatch(updateFavouriteList(item, item?.id));
                    // router.success("aggiunto alla lista dei desideri");
                  }
                })
                .catch((e) => {
                  toast.error("Si è verificato un errore");
                });
            }}
          >
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
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Orders;
