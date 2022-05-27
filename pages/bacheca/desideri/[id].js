import Orders from "../../../components/orders";
import Sidebar from "../../../components/sidebar";

const Desideri = ({ wishlists }) => {
  return (
    <div className=" pt-4 pb-[5em] md:px-5 lg:px-[4em]">
      <div className="flex flex-wrap  justify-between  px-4">
        <Sidebar />
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  md:mt-0">
          {wishlists?.data?.length > 0
            ? wishlists?.data?.map((wishlist, index) => (
                <Orders item={wishlist} key={index} />
              ))
            : "No wishlists found"}
        </div>
      </div>
    </div>
  );
};

export default Desideri;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}user/${params?.id}/wishlists`
  );
  const orders = await res.json();

  return { props: { orders,params } };
}