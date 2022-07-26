import FormData from "form-data";
import Cok from 'cookie'

export default async function handler(req, res) {
  let cook = Cok.parse(req.headers.cookie || "");
  let token = cook.token;
  const query = req.query;
  const { transid, orderid } = query;
  let formD = new FormData();
  formD.append("order_status", 3);
  formD.append("payment_status", 1);

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
      console.log(re);
      if (re.status == 200) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    });

    // return {
    //   redirect: {
    //     destination: "/",
    //     permanent: false,
    //   },
    // };


    if (res) {
      res.writeHead(200, {
        Location: req.host+'/shop?m=success'
      });
      res.end();
    }

  // return res.status(200).json(resp);
}
