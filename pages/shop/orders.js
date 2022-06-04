import {useState, useEffect} from 'react';
import Link from 'next/link'
import Image from 'next/image';
import {Icon} from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import {updateTotalPrice} from '../../stores/mySlice';
import TableBody from '../../components/checkout/table';
import { useRouter } from 'next/router';

export default function Orders(){


    const dispatch = useDispatch();
    const router  = useRouter();
    const cartList = useSelector(state => state.mySlice.cart);
    const totalPrice = useSelector(state => state.mySlice.totalCartPrice);
  
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


    return (
        <>
        <style jsx>
        {
            `
            .OrdersWrapper{
                min-height: 100vh;
            }
            .ordersContainer{
                display: grid;
                grid-template-columns: 50% 50%;
                width: 80%;
            }


            `
        }
        </style>
        <div className="OrdersWrapper">
            <div className="ordersContainer mx-auto">
                <div className="formWrapper">
                    <div className="w-3/4 min-w-[250px] text-sm">
                    <form>
                        <div className='flex items-center justify-between my-3'>
                            <label>NOME<span className='text-red-600'>*</span></label>
                            <input
                            className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                            type={'text'}
                            onChange = {(e) => {
                                console.log(e.target.value);
                            }}
                            
                            />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>COGNOME<span className='text-red-600'>*</span></label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = "Osas"
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>CODICE FISCALE<span className='text-red-600'>*</span></label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = "SSNNNGLKNAHLK32850"
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>RAGIONE SOCIALE</label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = "DLESS"
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>PATITA IVA</label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = {86334519757}
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>CODICE UNIVOCO</label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = {86334519757}
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>PEC</label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'email'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = "info@diessofficial.com"
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>INDIRIZZO EMAIL<span className='text-red-600'>*</span></label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = "info@diessofficial.com"
                        />
                        </div>


                        <div className='flex items-center justify-between my-3'>
                        <label>CODICE DESTINATARIO</label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = {'0000000000'}
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>PAESE?REGIONE<span className='text-red-600'>*</span></label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = "Italia"
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>PROVINCA<span className='text-red-600'>*</span></label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = "Roma"
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>CITA<span className='text-red-600'>*</span></label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = "Roma"
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>INDRIZZO<span className='text-red-600'>*</span></label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = "Via Alberti Lamborghini"
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>APT, SUITE, UNITA ecc.</label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = "Roma"
                        />
                        </div>


                        <div className='flex items-center justify-between my-3'>
                        <label>NUMERO CIVICO<span className='text-red-600'>*</span></label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = {55}
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>CAP<span className='text-red-600'>*</span></label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = {18775}
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>TELEFONO<span className='text-red-600'>*</span></label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = {'333 446 2789'}
                        />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                        <label>FAX</label>
                        <input
                        className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'info@diessofficial.com'}
                        onChange = {(e) => {
                            console.log(e.target.value);
                        }}
                        value = {55}
                        />
                        </div>

                        <input
                        className='float-right bg-black text-white py-1 px-3 text-sm rounded-3xl'
                        type={'submit'}
                        value = "SALVA"
                        />

                    </form>
                    </div>
                </div>

                {/* start of cart section  */}

                {/* ..
                ..
                ..
                .. */}
                <div className="cartItemsWrapper">
                <div className=' table py-8'>
                    {cartList.length > 0 ? <div className="m-auto w-[95%] md:w-[90%] lg:w-2/3">
                        <section className='table py-1 '>
                        <table className="w-full">
                            <thead className='table_head'>
                            <tr>
                                <th> </th>
                                <th> </th>
                                <th>Prodotto</th>
                                <th>Prezzo</th>
                                <th>Quantita</th>
                                <th>Subtotale</th>
                            </tr>
                            </thead>
                            <tbody className=' '>
                            {cartList.map((item, index) => (
                                <TableBody
                                key={index}
                                id = {item.id}
                                name = {item.name}
                                price = {item.price}
                                quantity = {item.quantity}
                                item = {item}
                                />
                            ))}
                            
                            </tbody> 
                        </table>
                        </section>
                        <section>
                        <div className=' border-b-2 border-[#ccc] border-solid pb-4'>
                            <form className=' flex items-center justify-between content-center ml-auto text-sm  w-1/2 py-1'>
                            <input
                            className='border-2 bg-transparent border-[#ccc] border-solid rounded-3xl px-3 py-[0.2em] w-[75%]'
                            type={'text'}
                            placeholder= {'CODICE PROMOZIONALE (COUPON)'}
                            />
                            <input 
                                className='rounded-3xl px-3 py-[0.3em] bg-black text-white'
                                value={'APPLICA'}
                            type={'submit'}/>
                            </form>
                        </div>
                        <div className='border-b-2 border-gray-400 border-solid text-sm py-3'>
                        <div className='flex items-center justify-between w-1/2 ml-auto py-1'>
                            <span>Subtotale</span>
                            <span className='text-red-500'>€{totalCartPrice()}</span>
                            </div>
                            <div className='flex items-center justify-between w-1/2 ml-auto py-1'>
                            <span>Sconto</span>
                            <span className='text-red-500'>€0</span>
                            </div>
                            <div className='flex items-center justify-between w-1/2 ml-auto py-1'>
                            <span>IVA (22%)</span>
                            <span className='text-red-500'>€24.915</span>
                            </div>
                            <div className='flex items-center justify-between w-1/2 ml-auto py-1'>
                            <span>Spedizione</span>
                            <span className='text-red-500'>€0</span>
                            </div>
                        </div>

                        <div className='border-b-2 border-gray-400 border-solid py-3'>
                        <div className='flex items-center justify-between w-1/2 ml-auto py-1'>
                            <span>Totale</span>
                            <span className='text-red-500'>€{totalCartPrice()}</span>
                            </div>
                        </div>

                        <div className=' py-4 text-sm text-right' onClick={()=>{ router.push('/shop/orders')}}>
                            <span className='bg-black text-white
                            px-3 py-1 rounded-3xl'>PROCEDI CON L'ORDINE</span>
                        </div>
                        </section>
                    </div>: 
                    <div className='m-auto w-[95%] md:w-[90%] lg:w-2/3'>
                        <div className='flex items-center justify-center'> 
                        <div className='text-center '>
                            <h1 className='text-2xl font-bold'>Il tuo carrello è vuoto</h1>
                            <Link href='/'>
                            <a className='text-blue-500 flex items-center justify-between w-fit py-5 m-auto'>
                                <Icon className='text-blue-500' icon="carbon:arrow-left" />
                                <span className='text-blue-500'>Torna alla home</span>
                            </a>
                            </Link>
                        </div>
                        </div>
                    </div>}
                    </div>
                </div>

            </div>


        </div>
        
        </>
    )
}