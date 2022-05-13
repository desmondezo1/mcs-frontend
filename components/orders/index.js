import Link from 'next/link';
import Image from "next/image";
import { Icon } from '@iconify/react'


const Orders = () => {
    return(
      <Link href = "#">
          <div className="w-[200px] cursor-pointer">
          <Image
          alt="orders"
          src={'/images/window.png'}
          width={200}
          height={200}
          quality = {100}
          />
          <p className="w-[170px] my-2 text-sm">Sany Mayer 400 ml Disinfettante germicide battericida spray.</p>
          <p className='text-sm text-red-600'>€7,55</p>
          <div className='icons flex items-center mt-2'>
            <Link href="#">
              <a>
              <Icon icon = 'carbon:shopping-cart'/>
              </a>
            </Link>
            <Link href="#">
              <a className='ml-2'>
                <Icon icon = 'il:heart' color = 'red'/>
              </a>
            </Link>
          </div>
          </div>
       </Link>
      
  )
}

export default Orders;