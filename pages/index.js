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
import CountUp  from 'react-countup'
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function Home() {

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    onSubmit: () => {
      setMessage('Form submitted');
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      message: yup.string().trim().required('Message is required'),
    }),
  });



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
          <Image alt="jumbotron" src={jumbotron} />
        </div>

        <div className="d-flex justify-content-center align-items-center">

          <div className="d-flex flex-column jumboText text-center justify-content-center align-items-center">
            <h2 className="fs-4 h2text">BENVENUTO!</h2>
            <h1 className="fs-3 text-center h1text">SCOPRI I NOSTRI SERVIZI</h1>
          </div>
          <span className={styles.arrow}>
              <Link href="#footer">
                <Image alt="arrow" src={downArrow} />
              </Link>
          </span>
        </div>

      </section>

      <section className={styles.distributorsSection}>
        <div className={styles.distributorsSectionWrapper}>

          <div className={styles.distImageCard}>
            <Image alt="toilet" src={toilet} />
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
                MCS nasce nel 2004 dal desiderio di offrire soluzioni di qualità per 
                i servizi igienici attraverso distributori ed accessori di ogni tipo. 
                Profumatori ambientali, igienizzanti per i wc, dispenser di asciugamani 
                in cotone e carta, distributori di sapone e carta igienica, sono solo alcune 
                delle proposte confortevoli ed ecologiche che hanno reso oggi MCS un' azienda 
                leader nel territorio siciliano. Dal 2007, dopo essersi affermata con questo 
                servizio, MCS allarga le proprie conoscenze abbracciando così i settori detergenza, 
                attrezzi di pulizia e carta monouso.
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

      <section className={styles.statsSection}>
        <div className={styles.statsSectionWrapper}>
          <div className={styles.stat} >
            <span className={styles.statCircle}>
               <CountUp start={0} end={100} delay={0} />
            </span>
            <span className={styles.statLabel}>
              NUOVI CLIENTI 2021
            </span>
          </div>


          <div className={styles.stat} >
            <span className={styles.statCircle}>
               <CountUp start={0} end={100} delay={0} />
            </span>
            <span className={styles.statLabel}>
              SPEDIZIONI NEL 2021
            </span>
          </div>


          <div className={styles.stat} >
            <span className={styles.statCircle}>
               <CountUp start={0} end={100} delay={0} />
            </span>
            <span className={styles.statLabel}>
            PRODOTTI NEL SHOP
            </span>
          </div>


          <div className={styles.stat} >
            <span className={styles.statCircle}>
               <CountUp start={0} end={100} delay={0} />
            </span>
            <span className={styles.statLabel}>
            BRAND PARTNERS
            </span>
          </div>

        </div>
        <span className={`${styles.statLinkNext} ${styles.link_with_arrow}`}>
          <Link href="">
            <a>
            SCOPRI I NOSTRI PARTNERS
            <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/>
            </a>
          </Link>
        </span>
      </section>

      <section className={styles.mapSection}>
        <div className={`${styles.mapSectionWrapper} ${"row"}`}>
          <div className={`${styles.mapSectionContactForm} ${"col-6"}`}>
              <span className={styles.name}>Contattaci</span>

              <form className={styles.contactForm}> 
              <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword" />
                </div>
              </div>     
                <textarea height="417px" width="425px" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
              </form>

              <span className={styles.link_with_arrow}>
                INVIA
                <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/>
              </span>

          </div>

          <div className={`${styles.mapSectionMap} ${"col-6"}`}>
            <span>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.768462533129!2d14.673311315293335!3d36.91979997992414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbe93ea2e74cec0df!2zMzbCsDU1JzExLjMiTiAxNMKwNDAnMzEuOCJF!5e0!3m2!1sen!2sit!4v1652256563849!5m2!1sen!2sit" width="450" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </span>
            <span>
              <ul className={styles.listStye}>
                <li> Strada Cento Pozzi km 1,2 C.da Buttino s.n.c. 97100, Ragusa (RG), Italia.</li>
                <li>Email: mcsprogettoigiene@gmail.com</li>
                <li>Tel: 0932 642711</li>
                <li>Cell: 3791979665 - 3395354321</li>
              </ul>
            </span>
          </div>
        </div>

      </section>
    </main>
    </>
  )
}
