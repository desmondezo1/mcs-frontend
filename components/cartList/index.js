 import { useState } from 'react';
 import {Icon } from '@iconify/react';
 import { useDispatch } from 'react-redux';
 import { increaseQuantity, decreaseQuantity, removeCartList } from '../../stores/mySlice';


const CartList = ({id, name, price, quantity,item}) => {
    const dispatch = useDispatch();
    return(
     <div className='cart_list py-3 border-b border-gray-400 border-solid px-3'>
     <span className='w-fit float-right cursor-pointer'
      onClick={() => dispatch(removeCartList(item))}
     ><Icon icon="carbon:close"  style={{ fontSize: '1.2rem' }}/></span>
     <span className='text-sm'>{name}</span>
    <div className='flex items-center'>
     <div className="flex items-center justify-between w-fit border-1 border-gray-400 border-solid rounded-3xl px-[0.1em]  my-2">
         <span className="text-sm cursor-pointer hover:bg-gray-200 rounded-[50%]"
          onClick={() => dispatch(decreaseQuantity(item))}
         ><Icon icon="carbon:subtract" width="20" height="20"
           
         /></span>
         <span className="px-3 text-sm">{quantity}</span>
         <span className=" cursor-pointer hover:bg-gray-200 rounded-[50%]"
            onClick={() => dispatch(increaseQuantity(item))}
         ><Icon icon="carbon:add" width="20" height="20"
         /></span>
       </div>
       <div>
         <span className="text-sm text-red-500 ml-3">{quantity} x €{price}</span>
       </div>
    </div>
  </div>
  )
  }

  export  default CartList;