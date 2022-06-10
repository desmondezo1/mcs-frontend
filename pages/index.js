import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import jumbotron from'../public/images/Jumbotron.png'
import downArrow from '../public/images/arrowdown.png'
import toilet from '../public/images/toilet.png'
import washingMachine from '../public/images/washingmachine.png'
import houseImage from '../public/images/house.png'
import window from '../public/images/window.png'
import { Icon } from '@iconify/react'
import CountUp  from 'react-countup'
import { useFormik } from 'formik'
import VisibilitySensor from 'react-visibility-sensor';
import arrowRight  from '../public/images/arrow_right.svg'
import * as yup from 'yup'
import 'animate.css';
import { useState } from 'react'
import { Router, useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();
  const [counterSect, setVisibiltyofSect] = useState(false);

  const visibiltySetter = (isVisible) =>{
    if(isVisible){
      setVisibiltyofSect(true)
    }
  }

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
      width: 50%;
      // margin-left: 10%;
    }

    .h2text{
      font-family: 'Almarai', sans-serif;
      font-size: 14.81px;
      color: #999999;
      font-weight: 400;
      margin-bottom: 20px;
    }
    .h1text{
      font-family: 'Almarai', sans-serif;
      font-weight: 500;
      font-size: 2.3rem!important;
    }

    #sect2, #sect0, #sect1, #sect3, #sect4{
      position:relative;
    }

    .sect1-arrow, .sect3-arrow{
      margin-top: 467px;
      bottom: 40px;
      right: 3%;
      cursor: pointer;
      position: absolute;
    }

    form{
      height:100%
    }
    textarea{
      height:75%;
      max-height: 350px;
      background:transparent;
      border:1px solid #000;
      border-radius: 17.5px;
    }
    .conttati{
      position: absolute;
      top: -70px;
    }


    .invia{
      bottom:0px;
      font-size: 0.8rem;

    }

    `}</style>
    <main>
      <section className="d-flex" id={'sect0'}>
        <div className="flex-grow-1">
          <Image alt="jumbotron" src={jumbotron} />
        </div>

        <div className="d-flex justify-content-center align-items-center ">

          <div className="d-flex flex-column jumboText text-left mx-auto" >
            <h4 className="fs-6 h2text">BENVENUTO!</h4>
            <h1 className="fs-3 h1text">SCOPRI I NOSTRI SERVIZI</h1>
          </div>
          <span className={`${styles.arrow} ${"sect1-arrow animate__animated animate__bounce animate__delay-5s animate__repeat-3 3	"}`}>
              <Link href="#sect1">
                <Image alt="arrow" src={downArrow} />
              </Link>
          </span>
        </div>

      </section>

      <section className={styles.distributorsSection} id={"sect1"}>
        <div className={styles.distributorsSectionWrapper}>

          <div className={styles.distImageCard}>
            <Image alt="toilet" src={toilet} />
            <div className={'d-flex'}>
              <Link href={"/category/washroom"}>
              <span className={'d-flex'}>
             <p  className='mr-1'> WASHROOM </p> 
                {/* <Icon icon="cil:arrow-right"  style={{ fontSize: '1.5rem' }}/> */}
                <Image src={arrowRight} height="14.4px" />
              </span>
              </Link>
            </div>
          </div>

          <div className={styles.distImageCard}>
            <Image src={washingMachine} alt=""/>
            <div>
            <Link href={"/category/macchinari"}>
              <span className={'d-flex'}>
              <p className='mr-1'> MACCHINARI  </p>
                {/* <Icon icon="cil:arrow-right"  style={{ fontSize: '1.5rem' }}/> */}
                <Image src={arrowRight} height="14.4px" />
              </span>
              </Link>
            </div>
          </div>

          <div className={styles.distImageCard}>
            <Image src={houseImage} alt=""/>
            <div>
            <Link href={"/category/TAPPETI ANTISCIVOLO"}>
              <span className={'d-flex'}>
              <p  className='mr-1'>TAPPETI ANTISCIVOLO </p>
                {/* <Icon icon="cil:arrow-right"  style={{ fontSize: '1.5rem' }}/> */}
                <Image src={arrowRight} height="14.4px" />
              </span>
              </Link>
            </div>
          </div>

          <div className={styles.distImageCard}>
            <Image src={window} />
            <div>
            <Link href={"/category/MONITORAGGIO"}>
              <span className={'d-flex'}>
               <p  className='mr-1'>MONITORAGGIO  </p>
                {/* <Icon icon="cil:arrow-right"  style={{ fontSize: '1.5rem' }}/> */}
                <Image src={arrowRight} height="14.4px" />
              </span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    <section className={styles.partnersSection} id={'sect2'}>

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
          <span className={`${styles.arrow} ${"sect3-arrow animate__animated animate__bounce animate__delay-5s animate__repeat-3 3	"}`}>
              <Link href="#sect3">
                <Image alt="arrow" src={downArrow} />
              </Link>
          </span>
    </section>

    <section className={styles.statsSection} id={'sect3'}>
       <VisibilitySensor onChange={visibiltySetter}>
        <div className={`${styles.statsSectionWrapper} ${'position-relative'}`}>
       
        
          <div className={styles.stat} >
            <span className={styles.statCircle}>
               {counterSect ? <CountUp start={0} end={250} delay={0} /> : null} +
            </span>
            <span className={styles.statLabel}>
              NUOVI CLIENTI 2021
            </span>
          </div>


          <div className={styles.stat} >
            <span className={styles.statCircle}>
            {counterSect ? <CountUp start={0} end={4500} delay={0} /> : null} +
            </span>
            <span className={styles.statLabel}>
              SPEDIZIONI NEL 2021
            </span>
          </div>


          <div className={styles.stat} >
            <span className={styles.statCircle}>
            {counterSect ? <CountUp start={0} end={300} delay={0} /> : null} +
            </span>
            <span className={styles.statLabel}>
            PRODOTTI NELLO SHOP
            </span>
          </div>


          <div className={styles.stat} >
            <span className={styles.statCircle}>
            {counterSect ? <CountUp start={0} end={40} delay={0} /> : null} +
            </span>
            <span className={styles.statLabel}>
            BRAND PARTNERS
            </span>
          </div>

        </div>
        </VisibilitySensor>
        <span className={`${styles.statLinkNext} ${styles.link_with_arrow}`}>
          {/* <Link href={"partners"}> */}
            <a href="/partners">
            SCOPRI I NOSTRI PARTNERS
            {/* <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/> */}
            <Image src={arrowRight} height="14.4px" />
            </a>
          {/* </Link> */}
        </span>
      </section>

      <section className={styles.mapSection} id={"sect4"}>
        <div className={`${styles.mapSectionWrapper} ${"row"}`}>
          <div className={`${styles.mapSectionContactForm} ${"col-6 position-relative"}`}>
              <span className={`${styles.name} ${"conttati"}`}>Contattaci</span>

              <form className={`${styles.contactForm} ${"p-0 "}`}>   
                <textarea height="417px" width="425px" className="form-control" placeholder='Scrivici qui!' id="exampleFormControlTextarea1" rows="10"></textarea>
              </form>

              <span className={`${styles.link_with_arrow} ${"invia d-flex position-absolute"}`}>
                INVIA
                <Icon icon="carbon:arrow-up-right"  style={{ fontSize: '1.5rem' }}/>
              </span>

          </div>

          <div className={`${styles.mapSectionMap} ${"col-6"}`}>
            <span>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.768462533129!2d14.673311315293335!3d36.91979997992414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbe93ea2e74cec0df!2zMzbCsDU1JzExLjMiTiAxNMKwNDAnMzEuOCJF!5e0!3m2!1sen!2sit!4v1652256563849!5m2!1sen!2sit" width="450" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
