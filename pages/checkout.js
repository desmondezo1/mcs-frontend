import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { updateTotalPrice } from "../stores/mySlice";
import TableBody from "../components/checkout/table";
import { useRouter } from "next/router";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.mySlice.cart);

  const totalPrice = useSelector((state) => state.mySlice.totalCartPrice);

  const totalCartPrice = () => {
    let total = 0;
    cartList.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  useEffect(() => {
    dispatch(updateTotalPrice(totalCartPrice()));
  });

  return (
    <div className=" table py-8">
      {cartList.length > 0 ? (
        <div className="m-auto w-[95%] md:w-[90%] lg:w-2/3">
          <section className="table py-1 ">
            <table className="w-full">
              <thead className="table_head">
                <tr>
                  <th> </th>
                  <th> </th>
                  <th>Prodotto</th>
                  <th>Prezzo</th>
                  <th>Quantita</th>
                  <th>Subtotale</th>
                </tr>
              </thead>
              <tbody className=" ">
                {cartList.map((item, index) => (
                  <TableBody
                    key={index}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    item={item}
                  />
                ))}
              </tbody>
            </table>
          </section>
          <section>
            <div className=" border-b-2 border-[#ccc] border-solid pb-4">
              <form className=" flex items-center justify-between content-center ml-auto text-sm  w-1/2 py-1">
                <input
                  className="border-2 bg-transparent border-[#ccc] border-solid rounded-3xl px-3 py-[0.2em] w-[75%]"
                  type={"text"}
                  placeholder={"CODICE PROMOZIONALE (COUPON)"}
                />
                <input
                  className="rounded-3xl px-3 py-[0.3em] bg-black text-white"
                  value={"APPLICA"}
                  type={"submit"}
                />
              </form>
            </div>
            <div className="border-b-2 border-gray-400 border-solid text-sm py-3">
              <div className="flex items-center justify-between w-1/2 ml-auto py-1">
                <span>Subtotale</span>
                <span className="text-red-500">€{totalCartPrice()}</span>
              </div>
              <div className="flex items-center justify-between w-1/2 ml-auto py-1">
                <span>Sconto</span>
                <span className="text-red-500">€0</span>
              </div>
              <div className="flex items-center justify-between w-1/2 ml-auto py-1">
                <span>IVA (22%)</span>
                <span className="text-red-500">€24.915</span>
              </div>
              <div className="flex items-center justify-between w-1/2 ml-auto py-1">
                <span>Spedizione</span>
                <span className="text-red-500">€0</span>
              </div>
            </div>

            <div className="border-b-2 border-gray-400 border-solid py-3">
              <div className="flex items-center justify-between w-1/2 ml-auto py-1">
                <span>Totale</span>
                <span className="text-red-500">€{totalCartPrice()}</span>
              </div>
            </div>

            <div
              className=" py-4 text-sm text-right"
              onClick={(e) => router.push("/shop/orders")}
            >
              <span
                className="bg-black text-white
            px-3 py-1 rounded-3xl"
              >
                PROCEDI CON L'ORDINE
              </span>
            </div>
          </section>
        </div>
      ) : (
        <div className="m-auto w-[95%] md:w-[90%] lg:w-2/3">
          <div className="flex items-center justify-center">
            <div className="text-center ">
              <h1 className="text-2xl font-bold">Il tuo carrello è vuoto</h1>
              <Link href="/">
                <a className="text-blue-500 flex items-center justify-between w-fit py-5 m-auto">
                  <Icon className="text-blue-500" icon="carbon:arrow-left" />
                  <span className="text-blue-500">Torna alla home</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

//Carrello vuoto
