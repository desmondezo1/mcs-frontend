import { useRouter } from "next/router";
import { useEffect } from "react";
import ShopList from "../../components/shop";
import ShopSideBar from "../../components/shop/sidebar";
import { orderList } from "../../const";
import useStore from "../../stores/zustandStore";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useState } from "react";

const Shop = ({ products, categories, brands, brand }) => {
  const userData = JSON.parse(Cookies.get("user") || "{}");
  const searchFilter = useStore((state) => state.searchFilter);
  const setSearchFilterValue = useStore((state) => state.setSearchFilterValue);
  const router = useRouter();
  const [brandQuery, setBrandQuery] = useState("");
  const { searchV, m } = router.query;

  const setBrand = (brand) => {
    setSearchFilterValue(brand);
  };
  useEffect(() => {
    setBrand(brand);
    if (m == "success") {
      toast.success("Il tuo ordine è stato ricevuto");
    } else if (m == "failed") {
      toast.error("pagamento fallito");
    }
  }, [m]);
  return (
    <div className=" pt-4 pb-[5em] md:px-5 lg:px-[4em]">
      <div
        className="flex justify-between  px-4"
        style={{
          display: "grid",
          gridTemplateColumns: "30% 70%",
        }}
      >
        {/* {!brand ? (
          <ShopSideBar categories={categories} brands={brands} />
        ) : ( */}
        <ShopSideBar
          categories={categories}
          searchValue={searchFilter}
          brands={brands}
        />
        {/* )} */}
        <div className=" mx-auto sm:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  md:mt-0">
          {products?.length > 0
            ? products
                ?.filter((val) => {
                  if (!searchFilter) {
                    return val;
                  } else if (
                    val.title
                      .toLowerCase()
                      .includes(searchFilter.toLowerCase()) ||
                    val?.brand
                      .toLowerCase()
                      .includes(searchFilter.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((product) => {
                  return <ShopList product={product} key={product.id} />;
                })
            : "No products found"}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(conext) {
  try {
    const { brand } = conext.query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}products`);
    const Catres = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}categories`);

    const brandRes = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}brands`);
    const brands = await brandRes.json();
    const products = await res.json();

    const categories = await Catres.json();
    return { props: { products, categories, brands } };
  } catch (error) {
    console.log(error);
    return { props: { products: [], categories: [], brands: [] } };
  }
}

export default Shop;
