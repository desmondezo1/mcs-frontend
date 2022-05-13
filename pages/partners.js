  import Image from "next/image";
  import { partners } from "../const";



const Partners = () => {
  return(
    <div className="pt-4 pb-[5em]">
       <div className="flex flex-wrap  justify-between  lg:justify-around px-4">
        <div className="left">
          <p className="border-b-[1px] w-fit border-gray-900 border-solid">
          I NOSTRI PARTNERS
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-4 md:mt-0">
          {partners.map((partner, index) => (
            <div key={index} className=" right border-black border-1 border-solid rounded-xl ">
            <Image 
            src={partner.imageLink}
            alt="partners"
            width={100}
            height={100}
            quality = {100}
            />
          </div>
          ))}
        </div>
        
       </div>
    </div>
  )
}

export default Partners;