import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import jumbotron from'../public/images/jumbotron.png'
import downArrow from '../public/images/arrowdown.png'
import toilet from '../public/images/toilet.png'
import washingMachine from '../public/images/washingmachine.png'
import houseImage from '../public/images/house.png'
import window from '../public/images/window.png'
import { Icon } from '@iconify/react'


export default function Home() {
  return (<>
    <style jsx>{`
    .jumboText {
      width: 70%;
    }

    .h2text{
      font-size: 22.81px;
      color: #999999;
      font-weight: 400;
    }
    .h1text{
      font-weight: 400;
      font-size: 46.48px;
    }
    `}</style>
    <main>
      <section className="d-flex">
        <div className="flex-grow-1">
          <Image src={jumbotron} />
        </div>

        <div className="d-flex justify-content-center align-items-center">

          <div className="d-flex flex-column jumboText text-center justify-content-center align-items-center">
            <h2 className="fs-4 h2text">BENVENUTO!</h2>
            <h1 className="fs-3 text-center h1text">SCOPRI I NOSTRI SERVIZI</h1>
          </div>
          <span className={styles.arrow}>
              <Link href="#footer">
                <Image src={downArrow} />
              </Link>
          </span>
        </div>

      </section>

      <section className={styles.distributorsSection}>
        <div className={styles.distributorsSectionWrapper}>

          <div className={styles.distImageCard}>
            <Image src={toilet} />
            <div>
              <span>
              WASHROOM
                <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/>
              </span>
            </div>
          </div>

          <div className={styles.distImageCard}>
            <Image src={washingMachine} />
            <div>
              <span>
              MACCHINARI
                <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/>
              </span>
            </div>
          </div>

          <div className={styles.distImageCard}>
            <Image src={houseImage} />
            <div>
              <span>
              TAPPETI ANTISCIVOLO
                <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/>
              </span>
            </div>
          </div>

          <div className={styles.distImageCard}>
            <Image src={window} />
            <div>
              <span>
              MONITORAGGIO
                <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/>
              </span>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.partnersSection}>

        <div className={styles.partnersSectionWrapper}>
            <div className="row" style={{marginBottom: 30+"px"}}>
              <div className={`${"col-4"}`}>
                <span className={`${styles.name}`}>Chi Siamo</span>
              </div>
              <div className="col-8">
                MCS nasce nel 2004 dal desiderio di offrire soluzioni di qualità per i servizi igienici attraverso distributori ed accessori di ogni tipo. Profumatori ambientali, igienizzanti per i wc, dispenser di asciugamani in cotone e carta, distributori di sapone e carta igienica, sono solo alcune delle proposte confortevoli ed ecologiche che hanno reso oggi MCS un' azienda leader nel territorio siciliano. Dal 2007, dopo essersi affermata con questo servizio, MCS allarga le proprie conoscenze abbracciando così i settori detergenza, attrezzi di pulizia e carta monouso.
              </div>
            </div>
            <div className="row " style={{marginBottom: 30+"px"}}>
              <div className={`${"col-4"}`}>
                <span className={`${styles.name}`}>Priorità</span>
              </div>
              <div className="col-8">
              Durante l' evoluzione dell' azienda e delle diverse tecnologie MCS aggiorna di continuo il proprio staff garantendo sempre una qualità impeccabile per il cliente. La nostra priorità è sempre ottimizzare il servizio al cliente.
              </div>
            </div>
            <div className="row" style={{marginBottom: 30+"px"}}>
              <div className={`${"col-4"}`}>
                <span className={`${styles.name}`}>Visione</span>
              </div>
              <div className="col-8">
              Proporsi come un partner affidabile e presente per i propri clienti è la visione che contraddistingue la cultura aziendale di MCS. Acquistare un prodotto MCS non vuol dire soltanto avere un buon rimedio, ma affidarsi soprattutto ad una consulenza professionale e trasparente in qualsiasi momento, contando su soluzioni immediate ed efficaci.
              </div>
            </div>
        </div>

      </section>
    </main>
    </>
  )
}
