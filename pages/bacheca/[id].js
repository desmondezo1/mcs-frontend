import Sidebar from "../../components/sidebar";
import Link from "next/link";
import Error from "next/error";
import Cok from "cookie";
import Cookies from "js-cookie";
import useStore from "../../stores/zustandStore";
import { useRouter } from "next/router";

const Bacheca = ({ errorCode }) => {
  const router = useRouter();

  const setLogginState = useStore((state) => state.setLoggedInState);
  const logOutUser = () => {
    setLogginState(false);
    Cookies.remove("user");
    router.push("/accedi-registrati");
  };

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <div className=" pt-4 pb-[5em]">
      <div className="flex  flex-wrap  justify-between  lg:justify-around px-4">
        <Sidebar />
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-4 md:mt-0">
          <Link href="/bacheca/ordini/1">
            <a className="w-[180px]  border-1 border-solid border-black py-[5em] px-12 rounded-lg relative">
              <div className="text-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                ORDINI
              </div>
            </a>
          </Link>

          <Link href="/bacheca/desideri/1">
            <a className=" w-[180px]  border-1 border-solid border-black py-[5em] px-12 rounded-lg relative">
              <div className="text-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                LISTA DEI DESIDERI
              </div>
            </a>
          </Link>
          <Link href="/bacheca/spedizione/1">
            <a className=" w-[180px]  border-1 border-solid border-black py-[5em] px-12 rounded-lg relative">
              <div className="text-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                DATI DI SPEDIZIONE
              </div>
            </a>
          </Link>
          <Link href="/bacheca/fatturazione/1">
            <a className=" w-[180px]  border-1 border-solid border-black py-[5em] px-12 rounded-lg relative">
              <div className="text-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                DATI DI FATTURAZIONE E DETTAGLI ACCOUNT
              </div>
            </a>
          </Link>
          {/* <Link href="/"> */}
          <span
            onClick={logOutUser}
            style={{
              cursor: "pointer",
            }}
            className=" w-[180px]  border-1 border-solid border-black py-[5em] px-12 rounded-lg relative"
          >
            <div className="text-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              LOG OUT
            </div>
          </span>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Bacheca;

export async function getServerSideProps({ req, params }) {
  let cook = Cok.parse(req.headers.cookie || "");
  let token = cook.token;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}user/${params.id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const errorCode = res.ok ? false : res.status;

  // unauthorized
  if (errorCode === 401) {
    // logout user
    // await fetch(`${process.env.NEXT_PUBLIC_API_URL}logout`, {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json;charset=UTF-8",
    //     Authorization: `Bearer ${token}`,
    //   },
    // });

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { errorCode } };
}
