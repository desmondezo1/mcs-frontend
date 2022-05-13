import Link from 'next/link';
import {Icon} from '@iconify/react';

const Login  = () => {
  
  return(
    <div className="py-[3em]">
      <div className="flex items-center justify-between flex-wrap  px-4 mx-auto w-[98%] md:w-[95%] lg:w-4/5 ">
        <div className= "w-1/2 p-[3em] lg:border-r-gray-500 lg:border-r lg:boder-r-solid">
          <div className="inner w-[280px] lg:w-[350px]">
            <h2 className="border-b-[2px] w-fit border-gray-700 border-solid">ACCEDI</h2>
            <form className="mt-2">
                <input
                className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
                type={'email'}
                placeholder = {`E-MAIL*`}
                required
                />
                <input 
                className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
                type={'password'}
                placeholder = {`PASSWORD*`}
                required
                />
              <div className="login_button bg-black text-white my-3 text-sm text-center rounded-3xl py-[0.6em]">
                LOG IN
              </div> 
              <div className="forgot_password login_button my-3 text-sm text-center rounded-3xl py-1 border-gray-600 border-2 boder-solid">
                <Link href="/forgot">
                <a>
                  PASSWORD DIMENTICATA?
                </a>
                </Link>
                
              </div>
              <div className="check">
                <input type="checkbox" />
                <span className="ml-2">Ricordami</span>
              </div>
            </form>
          </div> 
        </div>
        <div>
          <div className="inner w-[280px] lg:w-[350px]">
          <h2 className='my-3 text-center'> NON HAI UN ACCOUNT? </h2>
          <div  className=' my-4 text-center'>
            <Link href="/registrati">
              <a className="border-gray-600 flex items-center justify-between border-2 boder-solid rounded-3xl py-1 px-3 w-fit m-auto">
                  <span> REGISTRATI </span>
                <span className='ml-1'><Icon icon="carbon:arrow-right"  style={{ fontSize: '1.2rem' }}/></span>
              </a>
            </Link>
          </div>
            <p className='text-sm text-gray-400 text-center my-2'>Registrando un account con nol, sarai in grandi di visualizzare lo storico dei tuoi ordini e accedere ai prezzi esclusivi per determinate categorie. Le informazioni richeste sono necessarie a render il processo d'aquisto piu semplice e rapido</p>
            <p className='text-sm text-gray-400 text-center my-2'>Bastano solo un paio di minuti per risparmiame molti di piu!</p>
          </div>  
        </div>
      </div>
    </div>
  )
};

export default Login;