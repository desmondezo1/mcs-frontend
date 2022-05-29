



export default async function categories(req, res) {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}categories`,
    {
        method: "GET",
        headers: {
        // "Content-type": "application/json;charset=UTF-8",
        }
    }   
  );
  const data = await resp.json();
//   console.log(data.data)
// res.status(200).json(resp)
  res.send(data.data);
}
  