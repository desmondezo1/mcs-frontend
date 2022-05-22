import ShopList from '../components/shop';
import ShopSideBar from '../components/shop/sidebar';
import { orderList } from "../const";


const Shop = () => {
    return (
        <div className=" pt-4 pb-[5em] md:px-5 lg:px-[4em]">
        <div className="flex flex-wrap  justify-between  px-4">
          <ShopSideBar/>
            <div className=" mx-auto sm:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  md:mt-0">
              {orderList.map((order, index) => (
              <ShopList key={index}/>
              ))}
            </div>   
        </div>
      </div>
    );
}

export default Shop;