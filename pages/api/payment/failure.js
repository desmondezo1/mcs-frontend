import FormData from "form-data";
import Cok from "cookie";
import Router from "next/router";

export default async function handler(req, res) {
  let cook = Cok.parse(req.headers.cookie || "");
  let token = cook.token;
  const query = req.query;
  const { transid, orderid } = query;
  // let formD = new FormData();
  // formD.append("order_status", 4);
  // formD.append("payment_status", 1);

  let d4data = {
    "order_status": 2, //cancelled
    "payment_status": 0
  }

  console.log("sjd", transid, orderid);
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}order/${orderid}`,
    {
      method: "PATCH",
      body: JSON.stringify(d4data),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        // "Content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((re) => {
      return re.json();
    })
    .then((re) => {
      if (re.status == 200) {
        console.log({re})
        return {
          status: re.status,
          redirect: {
            destination: "/shop?m=failed",
            permanent: false,
          },
        };
      }
    });

  if (resp.status === 200) {
    res.redirect("/shop?m=failed");
  }

  console.log(resp);
  return resp;
}