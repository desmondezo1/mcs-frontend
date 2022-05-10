import Image from 'next/image'
import Link from 'next/link'
import paymentLogos from '../../public/images/paymentLogos.png'
import HeaderCss from '../../styles/layout/header.module.css'
import { Icon } from '@iconify/react';
import { useRouter } from "next/router";
import FooterCss from "../../styles/layout/footer.module.css"

export default function footer(){
    
    const router = useRouter();
    const year = new Date("Y");
    return (
        <>
        <footer className={FooterCss.footerWrapper}>
            <div className={`${FooterCss.linksWrapper} ${"mx-auto"}`}>
                <div className={FooterCss.linkContainer}>
                    <ul>
                        <li>MCS PROGETTO IGIENE</li>
                        <li>di Amore Floreana</li>
                        <li>Via Palmina Martinelli 8,</li>
                        <li>97100, Ragusa (RG), Sicilia, Italia.</li>
                        <li>Partita I.V.A. 01745080885</li>
                    </ul>
                </div>
                <div className={FooterCss.linkContainer}>
                    <ul>
                        <li>Termini e Condizioni</li>
                        <li>Reso Prodotti</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div className={FooterCss.linkContainer}>
                    <ul>
                        <li>Spedizione</li>
                        <li>FAQ</li>
                        <li>Contatti</li>                        
                    </ul>
                </div>
            </div>
            <div className={`${FooterCss.socialsWrapper}`}>
               <div className={FooterCss.socialsContainer}>
                   <span>
                         <a >ASSITENZA CLIENTI</a>
                         <Icon icon="carbon:arrow-up-right" style={{ fontSize: '1.5rem' }} />
                   </span>
                  
                    <span>
                        <a >WHATSAPP</a>
                        <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/>
                    </span>
                    
                    <span>
                        <a >FACEBOOK</a>
                        <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/>
                    </span>
                    
                    <span>
                        <a >INSTAGRAM</a>
                        <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/>
                    </span>
                    
                </div> 
            </div>
            <div className={FooterCss.paymentLogo}>
                <div className={FooterCss.paymentLogoWrapper}>
                    <span>
                        <Icon icon="ph:copyright-light"/>
                        {`${new Date().getFullYear()}
                         MCS Group S.r.l`}
                    </span>
                    <Image src={paymentLogos} />

                </div>
            </div>
        </footer>
        </>
    )

}