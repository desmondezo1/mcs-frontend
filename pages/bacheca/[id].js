import Sidebar from "../../components/sidebar";
import Link from "next/link";


const Bacheca = () => {
  return (
    <div className=" pt-4 pb-[5em]">
      <div className="flex  flex-wrap  justify-between  lg:justify-around px-4">
        <Sidebar />
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-4 md:mt-0">
            <Link href="/bacheca/ordini/1">
              <a className="w-[180px]  border-1 border-solid border-black py-[5em] px-12 rounded-lg relative">
              <div className="text-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                ORDINI
                </div>
              </a> 
            </Link>
           
            <Link href="/bacheca/desideri/1">
            <a className=" w-[180px]  border-1 border-solid border-black py-[5em] px-12 rounded-lg relative">
              <div className="text-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              LISTA DEI DESIDERI
                </div>
              </a>  
            </Link>
            <Link href="/bacheca/spedizione/1">
            <a className=" w-[180px]  border-1 border-solid border-black py-[5em] px-12 rounded-lg relative">
              <div className="text-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              DATI DI SPEDIZIONE
                </div>
              </a>
            </Link>
            <Link href="/bacheca/fatturazione/1">
            <a className=" w-[180px]  border-1 border-solid border-black py-[5em] px-12 rounded-lg relative">
              <div className="text-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              DATI DI FATTURAZIONE E DETTAGLI ACCOUNT
                </div>
              </a> 
            </Link>
            <Link href="/">
            <a className=" w-[180px]  border-1 border-solid border-black py-[5em] px-12 rounded-lg relative">
              <div className="text-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              LOG OUT
                </div>
              </a>
            </Link>
            
          </div>
        
      </div>
     
    </div>
  )
}

export default Bacheca;