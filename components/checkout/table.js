import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeCartList,
} from "../../stores/mySlice";

const TableBody = ({ id, name, price, quantity, item, photo }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {}, []);
  console.log("photo", item);
  return (
    <tr className="overflow-visible">
      <td>
        <Icon
          onClick={() => dispatch(removeCartList(item))}
          className="cursor-pointer"
          icon="carbon:close"
          style={{ fontSize: "1.2rem", margin: "auto" }}
        />
      </td>
      <td className="">
        <Image
          src={item?.photo}
          alt="product"
          width={50}
          height={50}
          quality={100}
        />
      </td>
      <td>{name}</td>
      <td className=" text-red-500">{`€${price}`} </td>
      <td className="">
        <div className="flex items-center justify-between w-fit border-1 border-gray-400 border-solid rounded-3xl px-[0.1em] m-auto  my-2">
          <span className="text-sm cursor-pointer hover:bg-gray-200 rounded-[50%]">
            <Icon
              icon="carbon:subtract"
              width="20"
              height="20"
              onClick={() => dispatch(decreaseQuantity(item))}
            />
          </span>
          <span className="px-3 text-sm">{quantity}</span>
          <span
            className=" cursor-pointer hover:bg-gray-200 rounded-[50%]"
            onClick={() => dispatch(increaseQuantity(item))}
          >
            <Icon icon="carbon:add" width="20" height="20" />
          </span>
        </div>
      </td>
      <td className="text-red-500">{`€${price * quantity}`} </td>
    </tr>
  );
};

export default React.memo(TableBody);
