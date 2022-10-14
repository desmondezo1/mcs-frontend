import { Icon } from "@iconify/react";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeCartList,
  calculateWeight,
} from "../../stores/mySlice";
import useStore from "../../stores/zustandStore";

const TableBody = ({ id, name, price, quantity, item, photo }) => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0)
  const shippingCost = useStore((state) => state.shippingCost);
  const setShippingCost = useStore((state) => state.setShippingCost);
  const cartList = useSelector((state) => state.mySlice.cart);
  const totalWeight = useSelector((state) => state.mySlice.totalWeight);
  // const calculateWeight = useSelector((state) => state.mySlice.calculateWeight);

  const calculateShipping = () => {

    calculateWeight();
    let total = 0;
    // cartList.forEach((item) => {
    //   total += +item?.weight * item?.quantity;
    // });
    if(total != totalWeight){
      total = totalWeight;
    }
    // console.log({totalWeight}, {weight})
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}calculateShipping/${total}`)
      .then((res) => {
        console.log(res.data);
        setShippingCost(+res.data.data);
      });
  };

  useEffect(()=>{
    console.log({useef: totalWeight})
    setWeight(totalWeight)

    calculateShipping();

  },[totalWeight])

  console.log({totalWeight})

  React.useEffect(() => {}, []);
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
          src={!item?.photo? item?.images[0].image: item?.photo}
          alt="product"
          width={50}
          height={50}
          quality={100}
        />
      </td>
      <td>{name}</td>
      <td className=" text-red-500">{`€${(price).toFixed(2)}`} </td>
      <td className="">
        <div className="flex items-center justify-between w-fit border-1 border-gray-400 border-solid rounded-3xl px-[0.1em] m-auto  my-2">
          <span className="text-sm cursor-pointer hover:bg-gray-200 rounded-[50%]">
            <Icon
              icon="carbon:subtract"
              width="20"
              height="20"
              onClick={() => {
                dispatch(decreaseQuantity(item));
                calculateShipping();
              }}
            />
          </span>
          <span className="px-3 text-sm">{quantity}</span>
          <span
            className=" cursor-pointer hover:bg-gray-200 rounded-[50%]"
            onClick={() => {
              dispatch(increaseQuantity(item));
              calculateShipping();
            }}
          >
            <Icon icon="carbon:add" width="20" height="20" />
          </span>
        </div>
      </td>
      <td className="text-red-500">{`€${(price * quantity).toFixed(2)}`} </td>
    </tr>
  );
};

export default React.memo(TableBody);
