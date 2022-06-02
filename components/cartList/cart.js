import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Icon} from '@iconify/react';
import Link from 'next/link'; 
import { updateTotalPrice, updateCartVisibility } from '../../stores/mySlice.js';

import CartList from './index'


const Cart = () => {
  const dispatch = useDispatch();
  let cartList = useSelector(state => state.mySlice.cart);
  const totalPrice = useSelector(state => state.mySlice.totalCartPrice);
  const openCart = useSelector(state => state.mySlice.openCart);
  //const  [removeCart, setRemoveCart] = useState(false);


  const totalCartPrice = () => {
    let total = 0;
    cartList.forEach(item => {
      total += item.price * item.quantity;
    })
     return total;
  }


  useEffect(() => {
    dispatch(updateTotalPrice(totalCartPrice()))

  })

  

  return(
    <div>
        {openCart === true? 
        <div>
        <div className="bg-black fixed w-full h-full left-0 top-0 opacity-60 ">
        </div>
        <div className="bg-[#F0F0F0] right-0 top-0 z-10 fixed w-[250px] bottom-0 flex flex-col ">
          <div className="py-3 top">
           <h1 className="flex items-center justify-between pb-4 px-3 border-b border-gray-400 border-solid">
             <span>CARRELLO</span>
             <div className="text-[12px] flex items-center cursor-pointer"
              onClick={() => dispatch(updateCartVisibility(false))}
             >
               <span> <Icon icon="carbon:close"  style={{ fontSize: '1.2rem' }}/> </span>
               <span>CHIUDI</span>
             </div>
           </h1>
           {cartList.length > 0 ? (
             console.log("carts: ",cartList),
             <div>
             {cartList.map((item, index) => (
               <CartList
                 key={index}
                 id = {item.index}
                 name = {item.name}
                 price = {item.price}
                 quantity = {item.quantity} 
                 item = {item}
               />
               
            ))}
            </div>
           ): 
           <div className='my-3'>
              <p className="text-center text-gray-500">
                Carrello vuoto
              </p>
            </div>}
          </div>
          {cartList.length  !== 0 &&
          (<div className='mt-auto p-3 border-t border-gray-400 border-solid'>
          <div className='flex items-center justify-between text-sm my-4'>
            <span>SUBTOTALE:</span>
            <span className='text-red-500'>€{totalCartPrice()}</span>
          </div>
          <div className='buttons text-sm'>
            <Link href = "/checkout">
              <p className='border-1 border-black border-solid rounded-3xl px-2 text-center py-1 my-2 cursor-pointer' onClick={() => dispatch(updateCartVisibility(false))}>VISUALIZZA CARELLO</p>
            </Link>
            <Link href= '#' >
            <p className=' bg-black text-white rounded-3xl px-2 text-center py-1 my-1'>PAGAMENTO</p>
            </Link>
          </div>
        </div>)}
          
        </div>
        </div>
        : null}  
    </div>
  )
}

export default Cart;


