import Link from "next/link";
import Image from "next/image";
import { Icon } from '@iconify/react'
import Sidebar from "../../../components/sidebar";
import { orderList } from "../../../const";

const Ordini = () => {
  const Orders = ({key}) => {
      return(
        <Link href = "./product">
          <a key={key}>
            <div className="w-[200px]">
            <Image
            alt="orders"
            src={'/images/window.png'}
            width={200}
            height={200}
            quality = {100}
            />
            <p className="w-[170px] my-2">Sany Mayer 400 ml Disinfettante germicide battericida spray.</p>
            <div className="text-sm border-1 border-solid border-black rounded-3xl  py-1 mt-3 flex items-center justify-evenly">
              <span>ORDINALO DI NUOVO</span>
              <span className="ml-1"><Icon icon="carbon:arrow-right"  style={{ fontSize: '1.2rem' }}/></span>
            </div>
            </div>
          </a>
        </Link>   
    )
  }
   return (
    <div className=" pt-4 pb-[5em] md:px-5 lg:px-[4em]">
      <div className="flex flex-wrap  justify-between  px-4">
        <Sidebar />
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  md:mt-0">
            {orderList.map((order, index) => (
               <Orders
               key= {index}
               />
            ))}
          </div>   
      </div>
    </div>
  );
}

export default Ordini;