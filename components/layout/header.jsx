import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.png'
import HeaderCss from '../../styles/header/header.module.css'

export default function header(){
return (
    <>
    <nav class="navbar navbar-light navbar-expand-lg bg-light">
    <div class="container">
        <Link href="/home">
            <a className={`${"navbar-brand navbarBrand"}`} >
               <Image className={HeaderCss.navbarBrand} src={Logo} alt=""  />
            </a> 
        </Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class={`${"collapse navbar-collapse end-0"} ${HeaderCss.navListConatiner}`} id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">SHOP</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">SERVIZI</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CHI SIAMO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">MEPA</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CONTATTI</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CONTATTI</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">ACCEDI/REGISTRATI</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
    </>
    )
}