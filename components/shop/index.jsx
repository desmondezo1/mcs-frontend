/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ShopList = ({ product }) => {
  return (
    <Link href="/bacheca/ordini/product">
      <div className="w-[250px] sm:w-[200px] cursor-pointer">
        <Image
          alt="orders"
          src={product?.photo}
          width={250}
          height={250}
          quality={100}
        />
        <p className="sm:w-[170px] my-2 text-sm">{product?.title}</p>
        <p className="text-sm text-red-600">€{product?.price}</p>
        <div className="icons flex items-center mt-2">
          <Link href="#">
            <a>
              <Icon icon="carbon:shopping-cart" />
            </a>
          </Link>
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
    </Link>
  );
};

export default ShopList;
