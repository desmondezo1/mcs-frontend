import Image from "next/image";
import { partners } from "../const";
import Cok from "cookie";
import { useRouter } from "next/router";
import Error from "next/error";

const Partners = ({ brands, errorCode }) => {
  const router = useRouter();
  let showProducts = (id) => {
    router.push("/shop?brand=" + id);
  };

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <>
      <style jsx>
        {`
          .box-item {
            min-height: 97.8px;
            min-width: 97.8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
      <div className="pt-4 pb-[5em]">
        <div className="flex flex-wrap  justify-between  lg:justify-around px-4">
          <div className="left">
            <p className="border-b-[1px] w-fit border-gray-900 border-solid">
              I NOSTRI PARTNERS
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-4 md:mt-0">
            {brands.map((partner, index) => (
              <div
                key={index}
                className="box-item right border-black border-1 border-solid rounded-xl "
                onClick={() => {
                  showProducts(partner.name);
                }}
              >
                {/* <Image 
            src={partner.imageLink}
            alt="partners"
            width={100}
            height={100}
            quality = {100}
            /> */}
                <span> {partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;

export async function getServerSideProps({ req }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}brands`, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  });

  const errorCode = res.ok ? false : res.status;

  const brands = await res.json();
  console.log(brands.data);
  return { props: { brands: brands.data, errorCode } };
}
