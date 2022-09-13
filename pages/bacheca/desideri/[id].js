import { useSelector } from "react-redux";
import Error from "next/error";
import Orders from "../../../components/orders";
import Sidebar from "../../../components/sidebar";
import Cok from "cookie";

const Desideri = ({ errorCode, orders, id }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <div className=" pt-4 pb-[5em] md:px-5 lg:px-[4em]">
      <div className="flex flex-wrap  justify-between  px-4">
        <Sidebar />
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  md:mt-0">
          {orders?.length > 0
            ? orders?.map((wishlist, index) => (
                <Orders item={wishlist} key={index} />
              ))
            : "No WishList fonund"}
        </div>
      </div>
    </div>
  );
};

export default Desideri;

export async function getServerSideProps({ req, params }) {
  let cook = Cok.parse(req.headers.cookie || "");
  const activeUser = JSON.parse(cook.user || "{}");
  const id = activeUser["id"];
  const token = cook.token;

  if (!token) {
    return {
      redirect: {
        destination: "/accedi-registrati",
        permanent: false,
      },
    };
  }

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_APP_URL + `user/${id}/wishlist`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const errorCode = res.ok ? false : res.status;

    const orders = await res.json();
    return {
      props: {
        orders: orders.data,
        params,
        errorCode,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { orders: null, params, errorCode: null, id: "activeUser" },
    };
  }
}
