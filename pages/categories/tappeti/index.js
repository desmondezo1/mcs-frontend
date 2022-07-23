import Image from "next/image"
import styles from '../../../styles/Home.module.css'
import LAVASCIUGA from '../../../public/images/LAVASCIUGA.png'
import ACCESSORI from '../../../public/images/ACCESSORI.png'
import arrowRight  from '../../../public/images/arrow_right.svg'
import { Icon } from '@iconify/react'
import Link from "next/link"

export default function Washroom() {
    return (<>
    <style jsx>
        {
            `
            
            .washroomWrapper{
                display: grid;
                grid-template-columns: 30% 70%;
                width: 80%;
                grid-gap: 6%;
                height: 100vh;
            }

            .title{
                padding-bottom: 10px;
                border-bottom: 2px solid #000;
                margin-bottom:30px;
                width: fit-content;
            }

            .text-wrapper{
                max-width: 300px;
            }
            
            .washroomText, .washroomImages{
                // margin: 50px 0;
                font-size: 0.8rem;
            }

            .washroomImages{
                display: flex;
                flex-direction: column;
            }

            .imageCard{
                margin-right: 20px;
                justify-content: unset;
                align-items: baseline;
                margin-top: 50px;
            }

            img{
                min-height: 290px;
            }
            
            `
        }

    </style>
    <div className="container mx-auto my-auto mt-[100px]">

       
        <div className="washroomWrapper mx-auto my-auto">
            <div className="washroomText">   <h1 className="title">TAPPETI PERSONALIZZATI</h1>
                <div className="text-wrapper">
                    <div className="washroomImages">
                    <Image src={LAVASCIUGA} alt=""/>
                    </div>
                
                </div>
            </div>
            <div className="washroomText mt-[50px]">
            
            <p>
            I nostri tappeti personalizzabili sono particolarmente apprezzati per l’elevata resistenza e soprattutto per la forte capacità comunicativa e pubblicitaria. Un benvenuto al vostro nuovo locale con un tappeto che parla di Voi. Misure e colori totalmente personalizzabili, questo è un tappeto con potere assorbente pari a 5 Lt d’acqua e 4 Kg di polvere. Il tessuto realizzato in poliammide-nylon è ignifugo, antiscivolo e funge da barriera antipolvere. Un operatore MCS sostituirà regolarmente il vostro tappeto consegnandone uno pulito.
            </p>
    
 

                <div className={'d-flex'} style={{
                    
                    marginTop: "30px",
                    border: "1px solid #000",
                    borderRadius: "20px",
                    padding: "2px 15px",
                    cursor: "pointer",
                    padding: "2px 10px",
                    width: "fit-content",
                    fontSize: "0.7rem",
                }}>
                <Link href={"/categories/washroom"}>
                <span className={'d-flex'}>
                <p  className='mr-1'> RICHIEDI UN PREVENTIVO </p> &nbsp;&nbsp;
                    <Image alt="" src={arrowRight} height="14.4px" />
                </span>
                </Link>
                </div>
                



            </div>
        </div>

        <span className={'d-flex align-item-center'} style={{
            alignItems: "center",
            position: "absolute",
            bottom: "-80px",
            left: "20px"
        }} >
            
            {/* <Icon icon="cil:arrow-left"  style={{ fontSize: '1rem', marginRight: "10px" }}/> */}
            <Image alt="" src={arrowRight} height="14.4px" style={{ fontSize: '0.7rem', transform: "rotate(180deg)"}} />
            <p className='ml-1' style={{ fontSize: '0.7rem'}}> Back  </p>
        </span>
    </div>
    
    
    </>)
}