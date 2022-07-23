import { useRouter } from "next/router";
import ShopList from "../../components/shop";
import ShopSideBar from "../../components/shop/sidebar";
import { orderList } from "../../const";
import useStore from "../../stores/zustandStore";
import Cookies from "js-cookie";

const Shop = ({ products, categories, brands }) => {
  const userData = JSON.parse(Cookies.get("user") || "{}");
  console.clear();
  console.log("User Data", userData);
  const searchFilter = useStore((state) => state.searchFilter);
  const router = useRouter();
  const { brand, searchV } = router.query;
  console.log({ searchFilter });
  return (
    <div className=" pt-4 pb-[5em] md:px-5 lg:px-[4em]">
      <div
        className="flex justify-between  px-4"
        style={{
          display: "grid",
          gridTemplateColumns: "30% 70%",
        }}
      >
        {!brand ? (
          <ShopSideBar categories={categories} brands={brands} />
        ) : (
          <ShopSideBar
            categories={categories}
            searchValue={brand}
            brands={brands}
          />
        )}
        <div className=" mx-auto sm:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  md:mt-0">
          {products?.length > 0
            ? products
                ?.filter((val) => {
                  if (!searchFilter) {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchFilter.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((product) => {
                  console.log(product);
                  return <ShopList product={product} key={product.id} />;
                })
            : "No products found"}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}products`);
  const Catres = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}categories`);
  const brandRes = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}brands`);
  const brands = await brandRes.json();
  const products = await res.json();
  const categories = await Catres.json();
  console.log({ products });
  return { props: { products, categories, brands } };
}

export default Shop;
