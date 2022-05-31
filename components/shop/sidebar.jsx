
 import React, { useEffect, useState } from 'react'
 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import { Icon } from '@iconify/react'
 import { useFormik, Field, FormikProvider } from "formik";

 //import {v4 as uuidv4} from 'uuid'
import Accordion, { AccordionList } from "../atoms/Accordion";
 
// const router = useRouter()
 const ShopSidebar = ({searchValue, categories}) => {

   const [searchTerm, setSearchTerm] = useState('');
  //  const searchFilter = () =>{
  //     router.push(`?searchV=${searchTerm}`)
  //  }

   useEffect(()=>{
     if(searchValue){
       setSearchTerm(searchValue);
     }
   });


   
  // const formik = useFormik({
  //   initialValues: {
  //     searchV: ""
  //   },

  //   onSubmit: async (values, { resetForm }) => {
  //     router.push(`?searchV=${values.searchV}`)
  //   }
  
  // });

  
  // const {
  //   errors,
  //   touched,
  //   values,
  //   isSubmitting,
  //   handleSubmit,
  //   getFieldProps,
  //   handleChange,
  // } = formik;

  return (<>
  <style jsx>{
`
.sideBarWrapper{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 51px 40px 0px;
    font-size: 0.7rem !important;
    text-align: left;
  }

  .sideBarWrapper p{
    text-align: left;
    margin-top: 5px;
  }

  aside > div{
    max-width: 70%;
  }

  aside input{
    width: 100%;
    font-size: 0.7rem!important;
  }

  aside span{
    font-size: 0.7rem!important;
  }

`

  }

  </style>
    <div className=' w-4/5 sm:w-fit mx-auto sm:mx-0'>
       <h2 className="border-b-[1px] w-fit border-gray-700 border-solid pb-[0.1em]">SHOP</h2>
        <aside className='my-4 text-sm'>
        {/* <FormikProvider value={formik}>
          <form  onSubmit={handleSubmit} > */}
          <div className='py-3'>
            
            <div className='search border-1 border-black border-solid rounded-3xl px-3 py-1 flex '>
                <input
                className='bg-transparent outline-none text-black'
                type={'search'}
                value={searchTerm}
                placeholder={searchTerm}
                name="searchV"
                onChange = {(e) => {setSearchTerm(e.target.value)}}
                // onChange = {handleChange}
                />
                <span><Icon icon="carbon:search" width="20" height="20"/></span>
            </div>
          </div>
          
          <h2 className='py-3' style={{ fontSize: 0.7+"rem"}}>CATEGORIE</h2>
          <div className='text-sm sideBarWrapper'>
              {categories.map(({ id, title, children }, i) =>
                    children?.length > 0 ? (
                      <Accordion
                        key={i}
                        inputType={'radio'}
                        name={title}
                        listData={children}
                      />
                    ) : (
                      <AccordionList
                        inputType={'radio'}
                        key={i}
                        id={`${title}_${i}`}
                        value={id}
                        label={title}
                      />
                    )
                )}
            </div>

          {/* <ul className='text-sm'>
            <li className='my-1'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Distributori</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-3'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Sapone</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-3'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Ascuigamano</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-8'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Paper</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-8'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Eco</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-8'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Electric</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-8'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Duo</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-3'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Carta Igeienica</span>
                </a>
              </Link>
            </li>
            <div className='my-6'>
            <li className='my-1'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Accessori</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-8'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Deoderanti Ambiente</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-8'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Ignienzzantee WC</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-8'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Copri Water</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-8'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Contenitori Assorbenti</span>
                </a>
              </Link>
            </li>
            <li className='my-1 ml-8'>
              <Link href='/shop'>
                <a>
                  <span className='text-sm'>Salviente Umidificate</span>
                </a>
              </Link>
            </li>
            </div> 
          </ul> */}

          <div className='flex border-1 border-black border-solid rounded-3xl items-center justify-between px-3 py-1'>
            <span>FILTRA PER MARCA</span>
            <span><Icon icon="carbon:arrow-down" width="20" height="20"/></span>
          </div>
          {/* </form>
          </FormikProvider> */}
        </aside>
    </div>
  </>)
 }

 export default React.memo(ShopSidebar);

//  export async function getServerSideProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}categories`);
//   const categories = await res.json();

//   console.log({categories});

//   return { props: { categories } };
// }