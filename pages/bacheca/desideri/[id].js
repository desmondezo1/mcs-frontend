import Link from 'next/link';
import Image from "next/image";
import { Icon } from '@iconify/react'
import Sidebar from "../../../components/sidebar";
import { orderList } from "../../../const/index";
import Orders from '../../../components/orders';



const Desideri = () => {
 return (
  <div className=" pt-4 pb-[5em] md:px-5 lg:px-[4em]">
    <div className="flex flex-wrap  justify-between  px-4">
      <Sidebar />
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  md:mt-0">
          {orderList.map((order, index) => (
           <Orders/>
          ))}
        </div>   
    </div>
  </div>
);
}

export default Desideri;