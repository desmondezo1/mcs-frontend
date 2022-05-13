import {useState} from 'react';
import Link from 'next/link';
import Sidebar from "../../../components/sidebar";

 
const Spedizione = () => {

 return (
  <div className=" pt-4 pb-[5em] md:px-5 lg:px-[5em]">
    <div className="flex flex-wrap  justify-between  px-4">
      <Sidebar />
        <div className="w-1/2 min-w-[250px] text-sm">
          <form>
            <div className='flex items-center justify-between my-3'>
              <label>NOME<span className='text-red-600'>*</span></label>
              <input
              className='w-3/4 bg-transparent border-2 border-solid border-gray-700 rounded-3xl px-3'
              type={'text'}
              onChange = {(e) => {
                console.log(e.target.value);
              }}
              value = "Noah Ekere"
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
  </div>
);
}
  
  export default Spedizione;