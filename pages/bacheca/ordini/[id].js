import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Sidebar from "../../../components/sidebar";
import Cok from 'cookie'

const Ordini = ({ orders }) => {
  const Orders = ({ order }) => {
    return (
      <Link href="./product">
        <a key={order}>
          <div className="w-[200px]">
            <Image
              alt="orders"
              src={order?.photo || "/images/window.png"}
              width={200}
              height={200}
              quality={100}
            />
            <p className="w-[170px] my-2">{order?.title}</p>
            <div className="text-sm border-1 border-solid border-black rounded-3xl  py-1 mt-3 flex items-center justify-evenly">
              <span>ORDINALO DI NUOVO</span>
              <span className="ml-1">
                <Icon
                  icon="carbon:arrow-right"
                  style={{ fontSize: "1.2rem" }}
                />
              </span>
            </div>
          </div>
        </a>
      </Link>
    );
  };
  return (
    <div className=" pt-4 pb-[5em] md:px-5 lg:px-[4em]">
      <div className="flex flex-wrap  justify-between  px-4">
        <Sidebar />
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  md:mt-0">
          {orders?.data?.length > 0
            ? orders?.data?.map((order, index) => (
                <Orders order={order} key={index} />
              ))
            : "No orders found"}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({req, params }) {


  let cook = Cok.parse( req.headers.cookie ) || '';
  let token = cook.token;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}user/${params?.id}/orders`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        'Authorization': `Bearer ${token}`,
    }
    }
  );


  const orders = await res.json();

  return { props: { orders,params } };
}

export default Ordini;
