import Link from 'next/link'

const Register = () => {
  return(
    <div className="py-5 px-4">
        <div className='w-full md:w-[400px] md:ml-[100px]'>
            <h2 className="border-b-[1px] w-fit border-gray-900 border-solid">REGISTRATI</h2>
            <form className="mt-2">
              <input
                className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
                type={'text'}
                placeholder = {`NOME*`}
                required
                />
                <input
                className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
                type={'text'}
                placeholder = {`COGNOME*`}
                required
                />
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
                <input 
                className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
                type={'password'}
                placeholder = {`CONFERMA PASSWORD*`}
                required
                />
                <div className="check">
                <input className='cursor-pointer' type="checkbox" />
                <span className="ml-2 text-sm">Ho letto e accetto il <a className='text-blue-500' href='#'>tratetamento dei dati personali.*</a></span>
              </div>
              <div className="check">
                <input className='cursor-pointer' type="checkbox" />
                <span className="ml-2 text-sm">Iscrivimi alla newsletter</span>
              </div>
              <div className="login_button bg-black text-white my-3 text-sm text-center rounded-3xl py-[0.6em]">
                REGISTRATI
              </div> 
              <div className="forgot_password login_button my-3 text-sm text-center rounded-3xl py-1 border-gray-600 border-2 boder-solid">
                <Link href="/accedi-registrati">
                <a>
                  HAI GIA UN ACCOUNT? EFFETTUA IL LOGIN
                </a>
                </Link>  
              </div>
              
            </form>
           
        </div>
    </div>
  )
}

export  default Register;