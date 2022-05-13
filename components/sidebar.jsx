 import React from 'react'
 import Link from 'next/link'
 import { useRouter } from 'next/router'
 //import {v4 as uuidv4} from 'uuid'

 
 const Sidebar = () => {
   const router = useRouter()
    const { asPath } = router
    const isActive = (path) => {
      if (asPath === path) {
        return 'text-gray-400'
      }
    }
  return (
    <div className='w-fit'>
       <h2 className="border-b-[1px] w-fit border-gray-700 border-solid pb-[0.1em]">IL MIO ACCOUNT</h2>
        <aside className='my-4'>
          <ul className='text-sm'>
            <li className='my-1'>
              <Link href="/bacheca/1">
                <a className={`hover:text-gray-400 ${isActive('/bacheca/1')}`}>Bacheca</a>
              </Link>
            </li>
            <li className='my-1'>
              <Link href="/bacheca/ordini/1">
                <a className={`hover:text-gray-400 ${isActive('/bacheca/ordini/1')}`}>Ordini</a>
              </Link>
            </li>
            <li className='my-1'>
              <Link href="/bacheca/desideri/1">
                <a className={`hover:text-gray-400 ${isActive('/bacheca/desideri/1')}`}>List dei Desideri </a>
              </Link>
            </li>
            <li className='my-1'>
              <Link href="/bacheca/spedizione/1">
                <a className={`hover:text-gray-400 ${isActive('/bacheca/spedizione/1')}`}>Dati di Spedizione</a>
              </Link>
            </li>
            <li className='my-1'>
              <Link href="/bacheca/fatturazione/1">
                <a className={`hover:text-gray-400 ${isActive('/bacheca/fatturazione/1')}`}>Dati di Fatturazione e Dettagil Account</a>
              </Link>
            </li>
             <li className='my-1'>
              <Link href="/">
                <a className={`hover:text-gray-400 ${isActive('/ordini')}`}>LogOut</a>
              </Link>
            </li>
          </ul>
        </aside>
    </div>
  )
 }

 export default React.memo(Sidebar);