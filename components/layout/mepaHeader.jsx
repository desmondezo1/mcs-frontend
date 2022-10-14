import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import LogoWhite from "../../public/images/logoWhite.svg";
import HeaderCss from "../../styles/layout/header.module.css";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { updateCartVisibility } from "../../stores/mySlice";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../cartList/cart";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import WhiteLogo from "../compounds/MCSWhiteLogo";
import WhiteLogo from "../../images/icons/MepaHomeIcon";

export default function MepaHeader() {
  const activeUser = JSON.parse(Cookies.get("user") || "{}");
  const id = activeUser["id"];
  const token = Cookies.get("token");

  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.mySlice.cart);
  const openCart = useSelector((state) => state.mySlice.openCart);
  const favourite = useSelector((state) => state.favouriteList) || [];
  const [favList, setFavList] = useState([]);
  const [bgColor, setBgColor] = useState({
    background_color: "#F0F0F0!important",
    color: "#000",
  });

  const router = useRouter();

  useEffect(() => {
    if (router.asPath == "/mepa") {
      setBgColor({
        background_color: "#1E3F7F!Important",
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
            
            });
            
            setFavList(list);
          }
        }
      })
      .catch(console.log);
  }, [router.asPath]);
  return (
    <>
      <style jsx>{`
        a {
          color: #fff !important;
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
          padding: 1px 8px;
          border-radius: 12.19px;
        }

        .container {
          padding: 0 5%;
        }
        .icon-wrapper {
          margin-left: 5%;
        }

        .mepa_active {
          color: black !important;
        }
      `}</style>
      <nav
        className={`${"navbar navbar-light navbar-expand-lg "} ${
          HeaderCss.MepaNavbar
        }`}
      >
        <div className="container">
          {openCart && <Cart />}
          <Link href="/">
            <a className={`${"navbar-brand navbarBrand"}`}>
              {router.asPath == "/mepa" ? (
                // <Image
                //   className={HeaderCss.MepaNavbarBrand}
                //   src={LogoWhite}
                //   alt=""
                //   height={"36.57px"}
                // />
                <WhiteLogo />
              ) : (
                <Image
                  className={HeaderCss.MepaNavbarBrand}
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
            }  ${HeaderCss.mepaHeaderNavList}`}
            id="navbarText"
            style={{
              padding: "2em 0",
            }}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className={` ${"nav-item"}`}>
                <Link href="/shop">
                  <a
                    className={`${"active"} ${"nav-link"}`}
                    aria-current="page"
                    style={{
                      background: router.asPath === "/shop" && "#fff",
                      color: router.asPath === "/shop" && "#1E3F7F !important",
                    }}
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
                    style={{ color: "#000" }}
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
                    style={{ color: "#000" }}
                  >
                    CHI SIAMO
                  </a>
                </Link>
              </li>
              <li className={`${"nav-item"}`}>
                <Link href="/mepa">
                  <a
                    className={`${
                      router.asPath == "/mepa" ? "active mepa_active" : ""
                    } ${"nav-link"}`}
                    style={{
                      background: router.asPath == "/mepa" && "#fff",
                      // router.asPath == "/mepa" ? "black !important" : "#000",
                    }}
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
                    style={{ color: "#000" }}
                  >
                    CONTATTI
                  </a>
                </Link>
              </li>
              <li className={`${"nav-item"}`}>
                <Link href="/accedi-registrati">
                  <a
                    className={`${
                      router.asPath == "/accedi-registrati" ? "active" : ""
                    } ${"nav-link"}`}
                    style={{ color: "#000" }}
                  >
                    ACCEDI/REGISTRATI
                  </a>
                </Link>
              </li>
            </ul>
            <div
              className={`${"icon-wrapper"} ${HeaderCss.iconWrapper}`}
              style={{ color: "#000" }}
            >
              <Link href="/bacheca/desideri/1">
                <a>
                  <div className={HeaderCss.wishListIcon}>
                    <span className={HeaderCss.wishListCount}>{favList.length}</span>
                    <Icon icon="bi:heart" />
                  </div>
                </a>
              </Link>

              <a
                className="cursor-pointer"
                onClick={() => dispatch(updateCartVisibility(true))}
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
