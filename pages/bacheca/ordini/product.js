import {useState} from 'react';
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { updateCartList } from '../../../stores/mySlice';

const Product = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(5);
  const [id, setId] = useState(3);
  const [activeTab, setActiveTab] = useState('tab2');


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  const addToCart = (id) => {
    dispatch(updateCartList({id: id, name: 'Sany Mayer 400ml', price: 7.55, quantity: count}));
  }

  return (
    <div className="py-[5em] w-fit md:w-[90%] lg:w-4/5 xl:w-2/3 m-auto">
      <div className="first my-5 pb-[6em]">
        <div className="flex flex-wrap justify-between ">
          <div className="left w-fit">
            <Image
             src={'/images/window.png'}
             alt="product"
             width={350}
             height={350}
             quality = {100}
            /> 
          </div>
          <div className="right mr-2 w-fit flex flex-col">
            <h1 className=" font-medium text-md md:text-lg lg:text-xl xl:text-2xl mt-2 md:mt-0">Sany Mayer 400 ml</h1>
            <p className="max-w-[600px] my-3 text-sm xl:text-md">Hai perso la password, Inserisci l'email cui e stata effettuata la registrazione. Riceveral tramite email un link per generrame una nuova.</p>
            <div className="flex items-center justify-between w-fit border-1 border-black border-solid rounded-3xl px-3 py-1 cursor-pointer my-3">
              <span className="text-sm pr-2">SCEGLI UN'OPZIONE</span>
              <span><Icon icon="carbon:arrow-down" width="20" height="20"/></span>
            </div>
            <div className="flex items-center justify-between w-fit border-1 border-black border-solid rounded-3xl px-1  my-3">
              <span className="text-sm cursor-pointer hover:bg-gray-200 rounded-[50%]"><Icon icon="carbon:subtract" width="30" height="30"
                onClick={() => setCount(count - 1)}
              /></span>
              <span className="px-3">{count}</span>
              <span className=" cursor-pointer hover:bg-gray-200 rounded-[50%]"
                onClick={() => setCount(count + 1)}
              ><Icon icon="carbon:add" width="30" height="30"
              /></span>
            </div>
            <div className="flex items-center justify-between mt-auto"
               onClick={() => addToCart(id++)}
            >
              <Link href={'/carrello'}>
                <a>
                <span className="rounded-3xl px-4 py-1 cursor-pointer text-sm bg-black text-white" >AGGIUNGI AL CARRELLO</span>
                </a>
              </Link>
              <span className="border-1 border-black border-solid rounded-3xl px-4 py-1 cursor-pointer text-sm"
              >AGGIUNGI ALLA LISTA DEI DESIDERI </span>
            </div>
          </div>
        </div>
      </div>
      <div className="second my-4">
        <div className='tab_heading flex items-center justify-between border-t-2 border-t-gray-500 border-t-solid py-2'>
           <div className= {`cursor-pointer text-sm ${activeTab === 'tab1' ? 'text-gray-400' : 'text-black' }`}
           onClick={() => handleTabChange('tab1')}
           >DESCRIZIONE</div>
           <div
           className= {`cursor-pointer text-sm ${activeTab === 'tab2' ? 'text-gray-400' : 'text-black' }`}
            onClick={() => handleTabChange('tab2')}>INFORMAZIONE AGGIUTIVE</div>
           <div 
           className= {`cursor-pointer text-sm ${activeTab === 'tab3' ? 'text-gray-400' : 'text-black' } flex items-center`}
           onClick={() => handleTabChange('tab3')}><span> SPEDIZIONE E RESO</span>
           <span className='ml-2'> <Icon icon="carbon:arrow-up-right"/></span>
           </div>
        </div>
        <div className="tab_content py-9">
          {activeTab === 'tab1' && 
          <div className="tab_content_item">
            DESCRIZIONE content
          </div>}
          {activeTab === 'tab2' &&
          <div className="tab_content_item">
            INFORMAZIONE AGGIUTIVE content
          </div>}
          {activeTab === 'tab3' && <div className="tab_content_item">
          SPEDIZIONE E RESO content
          </div>}
          </div>
      </div>
    </div>
  )
}

 export  default Product;