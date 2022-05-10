import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import jumbotron from'../public/images/jumbotron.png'
import downArrow from '../public/images/arrowdown.png'


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
    </main>
    </>
  )
}
