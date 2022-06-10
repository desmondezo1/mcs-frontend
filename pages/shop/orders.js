import {useState, useEffect} from 'react';
import Link from 'next/link'
import Image from 'next/image';
import {Icon} from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import {updateTotalPrice} from '../../stores/mySlice';
import TableBody from '../../components/checkout/table';
import { useRouter } from 'next/router';
import Cok from 'cookie'
import Cookies from 'js-cookie'
import SpedizioneForm from '../../components/molecules/forms/spedizione';
import useStore from '../../stores/zustandStore';

export default function Orders(){

    
    const userId = useStore(state => state.userId);
    let us ;
    const dispatch = useDispatch();
    const router  = useRouter();
    const cartList = useSelector(state => state.mySlice.cart);
    const totalPrice = useSelector(state => state.mySlice.totalCartPrice);
    const [privateInput, setPrivateInput] = useState(true);
    const [userData, setUserData] = useState('');
    
    const handleProceedToOrders = () => {
        let doc = document.getElementById('shippingDetails');
        let formD = new FormData(doc);

        router.push('/shop/orders2');
    }
    const totalCartPrice = () => {
        let total = 0;
        cartList.forEach(item => {
          total += item.price * item.quantity;
        })
         return total;
      }

      const getUser = async () => {
          if(userId){
            let token = Cookies.get('token')
            const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/${userId}`,{
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                'Authorization': `Bearer ${token}`,
                }
          });
            const res = await result.json();
             setUserData(res.data);
            
          }else{
              router.push('/accedi-registrati')
          }
        
      }
      useEffect( ()=>{
        getUser()
      })

    useEffect(() => {
        dispatch(updateTotalPrice(totalCartPrice()))
      })
     
    
    const handlePrivateInput = (event) => {
        event.preventDefault();
        setPrivateInput(!privateInput);
    }
    

    return (
        <>
        <style jsx>
        {
            `
            .OrdersWrapper{
                min-height: 100vh;
            }

            .ordersContainer {
                display: grid;
                grid-gap: 30px;
                grid-template-columns: 50% 50%;
                width: 80%;
            }
            `
        }
        </style>
        <div className="OrdersWrapper">
            <div className="ordersContainer mx-auto">
                <div className="formWrapper">
                    <div className=" py-8 w-100 min-w-[250px] text-sm">

                    {/* form switch */}
                    <div className="" style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <input
                            onClick={handlePrivateInput}
                            className={`mr-3 border-2 border-solid border-gray-700 rounded-3xl px-3 ${privateInput && "bg-black text-white"}`}
                            type={'submit'}
                            value = 'CORRIERE ESPRESSO'
                        />
                        <input
                            onClick={handlePrivateInput}
                            className={`mr-3 border-2 border-solid border-gray-700 rounded-3xl px-3 ${!privateInput && "bg-black text-white"}`}
                            type={'submit'}
                            value = 'RITIRO IN SEDE'
                        />
                </div> 
                    { privateInput ? (
                    
                    <form id="shippingDetails">
                        <SpedizioneForm user={userData} />
                    </form>
                    
                    
                    ) :(
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "50% 50%",
                            width: "80%",
                            marginTop: "30px"
                        }}>
                            <span>Ririto in sede a:</span>
                            <span>MCS Group S.r.l Strada Cento Pozzi km 1,2 C.da Buttino s.n.c. 97100, Ragusa (RG), Italia.</span>
                        </div>
                    )}
                    
                    </div>
                </div>

                {/* start of cart section  */}

                {/* ..
                ..
                ..
                .. */}
                <div className="cartItemsWrapper">
                <div className=' table py-8'>
                    {cartList.length > 0 ? <div className="m-auto w-[95%] md:w-[90%] lg:w-100">
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

                        <div className=' py-4 text-sm text-right' onClick={()=>{handleProceedToOrders()}}>
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

// export async function getServerSideProps({req, res}){
 
//     // let cook = Cok.parse(req.headers.cookie || "");
//     // let userCookie = cook.user.id;

//     // console.log(userCookie)
//     // const result = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/getUser?userid=${userCookie}`);



//     // let user = await result.json();
//     // console.log({user})

//     // if(!user){
//         let user = {};
//     // }

//     return { props: { user } };

// }