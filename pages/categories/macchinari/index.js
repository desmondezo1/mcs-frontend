import Image from "next/image"
import styles from '../../../styles/Home.module.css'
import LAVASCIUGA from '../../../public/images/LAVASCIUGA.png'
import ACCESSORI from '../../../public/images/ACCESSORI.png'
import arrowRight  from '../../../public/images/arrow_right.svg'
import { Icon } from '@iconify/react'

export default function Washroom() {
    return (<>
    <style jsx>
        {
            `
            
            .washroomWrapper{
                display: grid;
                grid-template-columns: 50% 50%;
                width: 80%;
                height: 100vh;
            }

            .washroomText .title{
                padding-bottom: 10px;
                border-bottom: 2px solid #000;
                margin-bottom:30px;
                width: fit-content;
            }

            .text-wrapper{
                max-width: 300px;
            }
            
            .washroomText, .washroomImages{
                margin: 50px 0;
                font-size: 0.8rem;
            }

            .washroomImages{
                display: flex;
                flex-direction: row;
            }

            .imageCard{
                margin-right: 20px;
                justify-content: unset;
            }
            
            `
        }

    </style>
    <div className="washroomWrapper mx-auto my-auto mt-[100px]">
        <div className="washroomText">
            <div className="text-wrapper">
                <h1 className="title">MACCHINARI</h1>
                {/* <p> Arreda il tuo bagno con soluzioni pratiche ed ecologiche!</p> */}
            </div>
        </div>
        <div className="washroomImages">

            <div className={`${styles.distImageCard} ${"imageCard"}`}>
                    <Image src={LAVASCIUGA} alt=""/>
                    <div>
                    <span className={'d-flex'}>
                    <p className='mr-1'> LAVASTOVIGLIE INDUSTRIALI  </p>
                        {/* <Icon icon="cil:arrow-right"  style={{ fontSize: '1.5rem' }}/> */}
                    <Image src={arrowRight} height="14.4px" />
                </span>
                </div>
            </div>


            <div className={`${styles.distImageCard} ${"imageCard"}`}>
                    <Image src={LAVASCIUGA} alt=""/>
                    <div>
                    <span className={'d-flex'}>
                    <p className='mr-1'> LAVASCIUGA  </p>
                        {/* <Icon icon="cil:arrow-right"  style={{ fontSize: '1.5rem' }}/> */}
                    <Image src={arrowRight} height="14.4px" />
                </span>
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
            <Image src={arrowRight} height="14.4px" style={{ fontSize: '0.7rem', transform: "rotate(180deg)"}} />
            <p className='ml-1' style={{ fontSize: '0.7rem'}}> Back  </p>
        </span>
    </div>
    
    
    </>)
}