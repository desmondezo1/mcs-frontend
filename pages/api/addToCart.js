
export default async function AddToCart(req, res) {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}user/cart`,
      {
          method: "POST",
          body: req.body,
          headers: {
          // "Content-type": "application/json;charset=UTF-8",
          }
      }   
    );
    const data = await resp.json();
    console.log({data: data.data});
    res.send(data.data);
    }
    