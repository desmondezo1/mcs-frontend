import Cok from 'cookie'


export default async function Orders(req, res) {
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
        `${process.env.NEXT_PUBLIC_API_URL}orders`,
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
    