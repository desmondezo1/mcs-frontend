import { useEffect, useState } from "react";

export default function Privato({user}){
    // console.log({user})
    const [firstName, setFirstName] = useState(user?.first_name);
    const [lastName, setLastName] = useState(user?.last_name);
    const [taxCode, setTaxCode] = useState();
    const [email, setEmail] = useState(user?.email);
    const [recipientCode, setRecipientCode] = useState();
    const [country, setCountry] = useState(user?.country);
    const [province, setProvince] = useState(user?.state);
    const [city, setCity] = useState(user?.city);
    const [address, setAddress] = useState(user?.addresss);
    const [suite, setSuite] = useState();
    const [houseNumber, setHouseNumber] = useState();
    const [zip, setZip] = useState();
    const [telephone, setTelephone] = useState(user?.phone);
    const [fax, setFax] = useState();

   

    return(<>
    <style jsx>
        {
            `
                label{
                  min-width: 30%;
                }

            `
        }
    </style>
            {/* <form> */}
                <div>
                    <h2 style={{
                        color: "#999999",
                        marginTop: "30px"
                    }}>Dati di Fatturazione</h2>
                </div>
                    <div className='flex items-center justify-between my-3'>
                        <label>NOME<span className='text-red-600'>*</span></label>
                        <input
                        className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                        type={'text'}
                        value={firstName}
                        onChange = {(e) => {
                            setFirstName(e.target.value);
                        }}
                        
                        />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                    <label>COGNOME<span className='text-red-600'>*</span></label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    value={lastName}
                    onChange = {(e) => {
                        setLastName(e.target.value);
                    }}
                    />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                    <label>CODICE FISCALE<span className='text-red-600'>*</span></label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    onChange = {(e) => {
                        setTaxCode(e.target.value);
                    }}
                    value={taxCode}
                    />
                    </div>

                   
                    {/* <div className='flex items-center justify-between my-3'>
                    <label>INDIRIZZO EMAIL<span className='text-red-600'>*</span></label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    onChange = {(e) => {
                        setEmail(e.target.value);
                    }}
                    value = {email}
                    />
                    </div> */}


                    {/* <div className='flex items-center justify-between my-3'>
                    <label>CODICE DESTINATARIO</label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    onChange = {(e) => {
                        setRecipientCode(e.target.value);
                    }}
                    value = {recipientCode}
                    />
                    </div> */}

                    <div className='flex items-center justify-between my-3'>
                    <label>PAESE?REGIONE<span className='text-red-600'>*</span></label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    onChange = {(e) => {
                        setCountry(e.target.value);
                    }}
                    value = {country}
                    />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                    <label>PROVINCA<span className='text-red-600'>*</span></label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    onChange = {(e) => {
                        setProvince(e.target.value);
                    }}
                    value = {province}
                    />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                    <label>CITA<span className='text-red-600'>*</span></label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    onChange = {(e) => {
                        setCity(e.target.value);
                    }}
                    value = {city}
                    />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                    <label>INDRIZZO<span className='text-red-600'>*</span></label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    onChange = {(e) => {
                        setAddress(e.target.value);
                    }}
                    value = {address}
                    />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                    <label>APT, SUITE, UNITA ecc.</label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    onChange = {(e) => {
                        setSuite(e.target.value);
                    }}
                    value = {suite}
                    />
                    </div>


                    <div className='flex items-center justify-between my-3'>
                    <label>NUMERO CIVICO<span className='text-red-600'>*</span></label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    onChange = {(e) => {
                        setHouseNumber(e.target.value);
                    }}
                    value = {houseNumber}
                    />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                    <label>CAP<span className='text-red-600'>*</span></label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
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
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'text'}
                    onChange = {(e) => {
                        setTelephone(e.target.value);
                    }}
                    value = {telephone}
                    />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                    <label>FAX</label>
                    <input
                    className='w-100 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
                    type={'info@diessofficial.com'}
                    onChange = {(e) => {
                        setFax(e.target.value);
                    }}
                    value = {fax}
                    />
                    </div>

                    {/* <input
                    className='float-right bg-black text-white py-1 px-3 text-sm rounded-3xl'
                    type={'submit'}
                    value = "SALVA"
                    /> */}

            {/* </form> */}
    
    </>)
}