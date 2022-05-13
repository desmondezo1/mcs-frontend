

const  Forgot = () => {
  return (
    <div className="py-[6em] px-4">
        <div className='w-full md:w-[400px] md:ml-[100px]'>
            <h2 className="border-b-[1px] w-fit border-gray-900 border-solid">PASSWORD DIMENTICATA</h2>
            <p className="mt-4">Hai perso la password? inserisci l'email cui e stata effettuata la registrazione Riceveral tramite email un link per generarne una nuova.</p>
            <form className="mt-2">
                <input
                className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
                type={'email'}
                placeholder = {`E-MAIL*`}
                required
                />
               
              <div className="login_button bg-black text-white my-3 text-sm text-center rounded-3xl py-[0.6em]">
                <input
                 type={'submit'}
                 value={'INVIA'}
                />
              </div> 
            </form>  
        </div>
    </div>
  )
}

export default Forgot