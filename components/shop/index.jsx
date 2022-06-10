/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartList, updateCartVisibility } from "../../stores/mySlice";

const ShopList = ( {product} ) => {

  const dispatch = useDispatch();
  // const addItemToCart = (prod) => {
  //  await fetch('/api/addToCart',{
  //    method: "POST",
  //    body: JSON.stringify(prod)
  //  })
  //  .then(res => res.json())
  //  .then(res => console.log({res}));
   
  // };

  const addToCart = ({ id, title, price}, quantity ) => {
    dispatch(
      updateCartList({
        id,
        name: title ,
        price,
        quantity,
      })
    );

    dispatch(updateCartVisibility(true))
  };

  return (<>
    <style jsx>
      {
        `
        .image, .prod-wrapper > span, .prod-wrapper img{
          border-radius: 11.38px;
        }
        
        `
      }
    </style>

      <div className="w-[250px] sm:w-[200px] cursor-pointer prod-wrapper">
        <Link href={`/shop/product/${product?.id}`}>
        <Image
          alt="orders"
          className="image"
          src={product?.photo}
          width={250}
          height={250}
          quality={100}
        /></Link>
        <p className="sm:w-[170px] my-2 text-sm">{product?.title}</p>
        <p className="text-sm text-red-600">€{product?.price}</p>
        
        <div className="icons flex items-center mt-2">
         
            <span onClick={()=>{ addToCart(product, 1)}}>
              <Icon icon="carbon:shopping-cart" />
            </span>
         
          <Link href="#">
            <a className="ml-2">
              <img
                src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png"
                style={{ color: "black" }}
                width={18}
                height={18}
                alt=""
              />
              <Icon icon="carbon:heart" color="red" />
            </a>
          </Link>
        </div>
      </div>
    {/* </Link> */}
    </>);
};

export default ShopList;
