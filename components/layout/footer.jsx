import Image from "next/image";
import Link from "next/link";
import paymentLogos from "../../public/images/plogos.svg";
import HeaderCss from "../../styles/layout/header.module.css";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import FooterCss from "../../styles/layout/footer.module.css";

export default function Footer() {
  const router = useRouter();
  const year = new Date("Y");
  return (
    <>
      <style jsx>
        {`
          * {
            font-size: 0.7rem;
          }
        `}
      </style>
      <footer className={FooterCss.footerWrapper} id="footer">
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
              <Link href="/private-policy#termini_e_condizioni">
                <a>
                  <li>Termini e Condizioni</li>
                </a>
              </Link>
              <Link href="/private-policy#diritto_di_recesso">
                <a>
                  <li>Reso Prodotti</li>
                </a>
              </Link>

              <Link href="/private-policy">
                <a>
                  <li>Privacy Policy</li>
                </a>
              </Link>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className={FooterCss.linkContainer}>
            <ul>
              <Link href="/private-policy#restituzione_merce/resi">
                <a>
                  <li>Spedizione</li>
                </a>
              </Link>
              <Link href="/private-policy">
                <a>
                  <li>FAQ</li>
                </a>
              </Link>

              <Link href="/#sect4">
                <li>Contatti</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={`${FooterCss.socialsWrapper}`}>
          <div className={FooterCss.socialsContainer}>
            <span style={{ display: "flex" }}>
              <a href="https://www.google.com/search?q=0932642711&oq=0932642711&aqs=chrome..69i57.214j0j4&sourceid=chrome&ie=UTF-8">
                ASSITENZA CLIENTI
              </a>
              <Icon icon="carbon:arrow-up-right" style={{ fontSize: "1rem" }} />
            </span>

            <span style={{ display: "flex" }}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=393893154823&app=facebook&entry_point=page_cta&fbclid=IwAR2eZdAGsGyhou8Zzlc1_FU7Z7dOqyHdB6GPDWRBimwWoS553lbjgaRCUzg"
              >
                WHATSAPP
              </a>
              <Icon icon="carbon:arrow-up-right" style={{ fontSize: "1rem" }} />
            </span>

            <span style={{ display: "flex" }}>
              <a href="https://web.facebook.com/profile.php?id=100083135592183">
                FACEBOOK
              </a>
              <Icon icon="carbon:arrow-up-right" style={{ fontSize: "1rem" }} />
            </span>

            <span style={{ display: "flex" }}>
              <a href="https://www.instagram.com/mcsgroup.ragusa/">INSTAGRAM</a>
              <Icon icon="carbon:arrow-up-right" style={{ fontSize: "1rem" }} />
            </span>
          </div>
        </div>
        <div className={FooterCss.paymentLogo}>
          <div className={FooterCss.paymentLogoWrapper}>
            <span className={FooterCss.mcsYear}>
              <Icon icon="ph:copyright-light" />
              {`${new Date().getFullYear()}
                         MCS Group S.r.l`}
            </span>
            <Image src={paymentLogos} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
