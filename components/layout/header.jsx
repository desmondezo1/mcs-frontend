import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.png'
import HeaderCss from '../../styles/layout/header.module.css'
import { Icon } from '@iconify/react';
import { useRouter } from "next/router";
import { updateCartVisibility } from '../../stores/mySlice';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../cartList/cart';

export default function header(){
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.mySlice.cart);
    const openCart = useSelector(state => state.mySlice.openCart);
  
    const router = useRouter();
return (
    <>
    <style jsx>{`
      .nav-item .nav-link {
        text-decoration: none;
        color: #000000;
      }
      .active {
        background: #1E3F7F;
        color: #E6E6E6!important;
        border-radius: 8.19px;
      }


    `}</style>
    <nav className={`${"navbar navbar-light navbar-expand-lg bg-light"} ${HeaderCss.navbar}`}>
    <div class="container">
        {openCart && <Cart />}
        <Link href="/home">
            <a className={`${"navbar-brand navbarBrand"}`} >
               <Image className={HeaderCss.navbarBrand} src={Logo} alt=""  />
            </a> 
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${"collapse navbar-collapse end-0"} ${HeaderCss.navListConatiner}`} id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className={` ${"nav-item"}`}>
                    <Link href="/shop">
                        <a className={`${router.asPath == "/shop" ? "active" : ""} ${"nav-link"}`} aria-current="page" >SHOP</a>
                    </Link>
                </li>
                <li className={`${router.asPath == "/servizi" ? "active" : ""} ${"nav-item"}`}>
                    <Link href="/servizi">
                        <a className="nav-link" >SERVIZI</a>
                    </Link>
                </li>
                <li className={`${"nav-item"}`}>
                    <Link href="/chi-siamo">
                        <a className={`${router.asPath == "/servizi" ? "active" : ""} ${"nav-link"}`} >CHI SIAMO</a>
                    </Link>
                </li>
                <li className={`${"nav-item"}`}>
                    <Link href="/mepa">
                        <a className={`${router.asPath == "/mepa" ? "active" : ""} ${"nav-link"}`}>MEPA</a>
                    </Link>
                </li>
                <li className={`${router.asPath == "/contati" ? "active" : ""} ${"nav-item"}`}>
                    <Link href="/contati">
                        <a className="nav-link" >CONTATTI</a>
                    </Link>
                </li>
                <li  className={`${"nav-item"}`}>
                    <Link href="/accedi-registrati">
                        <a className={`${router.asPath == "/accedi-registrati" ? "active" : ""} ${"nav-link"}`} >ACCEDI/REGISTRATI</a>
                    </Link>
                </li>
            </ul>
            <div class={`${"icon-wrapper"} ${HeaderCss.iconWrapper}`}>               
               <Link href="/bacheca/desideri/1">
                    <a>
                    <div className={HeaderCss.wishListIcon}>
                    <span className={HeaderCss.wishListCount}>5</span>
                    <Icon icon="bi:heart" />
                </div>
                    </a>
                </Link>
                
                
                    <a
                    className='cursor-pointer' 
                    onClick={ () => dispatch(updateCartVisibility(true))}
                    >
                    <div className={HeaderCss.cartIcon}>
                        <span className={HeaderCss.cartIconCount}>{cartList.length}</span>
                        <Icon icon="clarity:shopping-cart-line" />
                    </div>
                    </a>
               
            </div>
        </div>
      </div>
    </nav>
    </>
    )
}