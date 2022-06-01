
export default async function Brands(req, res) {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}brands`,
    {
        method: "GET",
        headers: {
        // "Content-type": "application/json;charset=UTF-8",
        }
    }   
  );
  const data = await resp.json();
  res.send(data.data);
  }
  