import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import LogoWhite from "../../public/images/logoWhite.svg";
import HeaderCss from "../../styles/layout/header.module.css";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import {
  updateCartVisibility,
  updateFavouriteList,
} from "../../stores/mySlice";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../cartList/cart";
import { useEffect, useState } from "react";
import useStore from "../../stores/zustandStore";
import WhiteLogo from "../compounds/MCSWhiteLogo";
import Cookies from "js-cookie";

export default function Header() {
  const activeUser = JSON.parse(Cookies.get("user") || "{}");
  const id = activeUser["id"];
  const token = Cookies.get("token");

  const loggedIn = useStore((state) => state.loggedIn);
  const userId = useStore((state) => state.userId);
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.mySlice.cart);
  const openCart = useSelector((state) => state.mySlice.openCart);
  const favourite = useSelector((state) => state.favouriteList) || [];
  const [favList, setFavList] = useState([]);
  console.clear();
  console.log(favourite);

  const [bgColor, setBgColor] = useState({
    background_color: "#F0F0F0!important",
    color: "#000",
  });

  const router = useRouter();

  useEffect(() => {
    if (router.asPath == "/mepa") {
      setBgColor({
        background_color: "#1E3F7F !Important",
        color: "#F0F0F0 !important",
        headerBottomMargin: "0px",
      });
    }

    fetch(process.env.NEXT_PUBLIC_APP_URL + `user/${id}/wishlist`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.status === 200) {
          const list = [];
          if (favourite.length === 0) {
            res.data.forEach((data) => {
              list.push(data);
              dispatch(updateFavouriteList(data));
            });
            setFavList(list);
          }
        }
      });
  }, [router.asPath]);
  return (
    <>
      <style jsx>{`
        .navbar {
          margin-bottom: ${bgColor.headerBottomMargin};
          color: ${bgColor.color}!important;
        }

        .navListConatiner .active .nav-link {
          color: ${bgColor.background_color}!important;
          background: ${bgColor.color}!important;
        }
        body {
          background-color: ${bgColor.background_color};
        }

        .navbar {
          background-color: ${bgColor.background_color};
          color: ${bgColor.color};
        }

        .nav-item .nav-link {
          text-decoration: none;
          color: #000000;
          font-size: 0.8rem;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .active {
          background: #1e3f7f;
          color: #e6e6e6 !important;
          padding: 2px 8px 1px 8px;
          border-radius: 12.19px;
        }

        .container {
          padding: 0 5%;
        }
        .icon-wrapper {
          margin-left: 5%;
        }
      `}</style>
      <nav
        className={`${"navbar navbar-light navbar-expand-lg bg-light"} ${
          HeaderCss.navbar
        }`}
      >
        <div className="container">
          {openCart && <Cart />}
          <Link href="/">
            <a className={`${"navbar-brand navbarBrand"}`}>
              {router.asPath == "/mepa" ? (
                <Image
                  className={HeaderCss.navbarBrand}
                  src={LogoWhite}
                  alt=""
                  height={"36.57px"}
                />
              ) : (
                <Image
                  className={HeaderCss.navbarBrand}
                  src={Logo}
                  alt=""
                  height={"36.57px"}
                />
              )}
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${"collapse navbar-collapse end-0"} ${
              HeaderCss.navListConatiner
            }`}
            style={{
              zIndex: 999,
            }}
            id="navbarText"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className={` ${"nav-item"}`}>
                <Link href="/shop">
                  <a
                    className={`${
                      router.asPath == "/shop" ? "active" : ""
                    } ${"nav-link"}`}
                    aria-current="page"
                  >
                    SHOP
                  </a>
                </Link>
              </li>
              <li className={`${"nav-item"}`}>
                <Link href="/#sect1">
                  <a
                    className={`${
                      router.asPath == "/#sect1" ? "active" : ""
                    } ${"nav-link"}`}
                  >
                    SERVIZI
                  </a>
                </Link>
              </li>
              <li className={`${"nav-item"}`}>
                <Link href="/#sect2">
                  <a
                    className={`${
                      router.asPath == "/#sect2" ? "active" : ""
                    } ${"nav-link"}`}
                  >
                    CHI SIAMO
                  </a>
                </Link>
              </li>
              <li className={`${"nav-item"}`}>
                <Link href="/mepa">
                  <a
                    className={`${
                      router.asPath == "/mepa" ? "active" : ""
                    } ${"nav-link"}`}
                  >
                    MEPA
                  </a>
                </Link>
              </li>
              <li className={`${"nav-item"}`}>
                <Link href="/#sect4">
                  <a
                    className={`${
                      router.asPath == "/#sect4" ? "active" : ""
                    } ${"nav-link"}`}
                  >
                    CONTATTI
                  </a>
                </Link>
              </li>
              <li className={`${"nav-item"}`}>
                {!loggedIn ? (
                  <Link href="/accedi-registrati">
                    <a
                      className={`${
                        router.asPath == "/accedi-registrati" ? "active" : ""
                      } ${"nav-link"}`}
                    >
                      ACCEDI/REGISTRATI
                    </a>
                  </Link>
                ) : (
                  <Link href={`/bacheca/${userId}`}>
                    <a
                      className={`${
                        router.asPath == "/bacheca" ? "active" : ""
                      } ${"nav-link"}`}
                    >
                      BACHECA
                    </a>
                  </Link>
                )}
              </li>
            </ul>
            <div className={`${"icon-wrapper"} ${HeaderCss.iconWrapper}`}>
              <Link href="/bacheca/desideri/1">
                <a>
                  <div className={HeaderCss.wishListIcon}>
                    <span className={HeaderCss.wishListCount}>
                      {favList.length}
                    </span>
                    <Icon icon="bi:heart" />
                  </div>
                </a>
              </Link>

              <a
                className="cursor-pointer"
                // onClick={ () => dispatch(updateCartVisibility(true))}
                onClick={() => router.push("/shop/cart")}
              >
                <div className={HeaderCss.cartIcon}>
                  <span className={HeaderCss.cartIconCount}>
                    {cartList.length}
                  </span>
                  <Icon icon="clarity:shopping-cart-line" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
