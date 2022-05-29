import { useRouter } from "next/router";
import ShopList from "../../components/shop";
import ShopSideBar from "../../components/shop/sidebar";
import { orderList } from "../../const";

const Shop = ({ products }) => {
  const router = useRouter();
  const {brand} = router.query;
  return (
    <div className=" pt-4 pb-[5em] md:px-5 lg:px-[4em]">
      <div className="flex justify-between  px-4">{
        !brand? <ShopSideBar/> :<ShopSideBar searchValue={brand} />
      }
        <div className=" mx-auto sm:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  md:mt-0">
          {products?.length > 0
            ? products?.map((product) => (
                <ShopList product={product} key={product.id} />
              ))
            : "No products found"}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}products`);
  const products = await res.json();

  return { props: { products } };
}

export default Shop;
