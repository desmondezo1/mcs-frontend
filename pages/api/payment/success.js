import FormData from "form-data";
import Cok from "cookie";
import Router from "next/router";

export default async function handler(req, res) {
  let cook = Cok.parse(req.headers.cookie || "");
  let token = cook.token;
  const query = req.query;
  const { transid, orderid } = query;
  let formD = new FormData();
  formD.append("order_status", 3);
  formD.append("payment_status", 1);

  console.log("sjd", transid, orderid);
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}order/${orderid}`,
    {
      method: "PATCH",
      body: formD,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((re) => {
      return re.json();
    })
    .then((re) => {
      if (re.status == 200) {
        return {
          status: re.status,
          redirect: {
            destination: "/shop?m=success",
            permanent: false,
          },
        };
      }
    });

  if (resp.status === 200) {
    res.redirect("/shop?m=success");
  }

  console.log(resp);
  return resp;
}
