import Cok from 'cookie'
import FormData from 'form-data';


export default async function AddToCart(req, res) {

    // let formD = new FormData();
    // formD.append('email', req.body.email);
    // formD.append('password', req.body.password);

  let cook = Cok.parse(req.headers.cookie || "");
  let token = cook.token;

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}user/cart/bulk`,
      {
          method: "POST",
          body: req.body,
          headers: {
            "Content-type": "application/json;charset=UTF-8",
            'Authorization': `Bearer ${token}`,
          }
      }   
    );
      const data = await resp.json();
      // console.log({data: data});
      res.send(data);
    }
    