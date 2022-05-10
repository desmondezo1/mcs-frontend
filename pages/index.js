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
      <div className="d-flex">
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

      </div>
      <div className={styles.distributorsSection}>
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
      </div>
    </main>
    </>
  )
}
