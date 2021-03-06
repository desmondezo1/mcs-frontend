import Image from "next/image"
import styles from '../../../styles/Home.module.css'
import distributori from '../../../public/images/distributori.png'
import ACCESSORI from '../../../public/images/ACCESSORI.png'
import arrowRight  from '../../../public/images/arrow_right.svg'
import { Icon } from '@iconify/react'
import useRouter from 'next/router'


export default function Washroom() {
    const router = useRouter;
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
                <h1 className="title">WASHROOM</h1>
                <p> Arreda il tuo bagno con soluzioni pratiche ed ecologiche!</p>
            </div>
        </div>
        <div className="washroomImages">

            <div className={`${styles.distImageCard} ${"imageCard"}`}>
                    <Image src={distributori} alt=""/>
                    <div>
                    <span className={'d-flex'}>
                    <p className='mr-1'> DISTRIBUTORI  </p>
                        {/* <Icon icon="cil:arrow-right"  style={{ fontSize: '1.5rem' }}/> */}
                    <Image alt="" src={arrowRight} height="14.4px" />
                </span>
                </div>
            </div>


            <div className={`${styles.distImageCard} ${"imageCard"}`}>
                    <Image src={ACCESSORI} alt=""/>
                    <div>
                    <span className={'d-flex'}>
                    <p className='mr-1'> ACCESSORI  </p>
                        {/* <Icon icon="cil:arrow-right"  style={{ fontSize: '1.5rem' }}/> */}
                    <Image alt="" src={arrowRight} height="14.4px" />
                </span>
                </div>
            </div>



        </div>

        <span onClick={()=>{ router.back()}} className={'d-flex align-item-center'} style={{
            alignItems: "center",
            position: "absolute",
            bottom: "-80px",
            left: "20px",
            cursor: "pointer"
        }} >
            
            {/* <Icon icon="cil:arrow-left"  style={{ fontSize: '1rem', marginRight: "10px" }}/> */}
            <Image alt="" src={arrowRight} height="14.4px" style={{ fontSize: '0.7rem', transform: "rotate(180deg)"}} />
            <p className='ml-1' style={{ fontSize: '0.7rem'}}> Back  </p>
        </span>
    </div>
    
    
    </>)
}