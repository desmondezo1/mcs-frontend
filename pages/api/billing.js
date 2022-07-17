import Cok from 'cookie'


export default async function Billing(req, res) {
    let cook = Cok.parse(req.headers.cookie || "");
    let token = cook.token;
    const query = req.query;
    const { userId } = query;

    // if (!token) {
    //   return {
    //     redirect: {
    //       destination: '/',
    //       permanent: false,
    //     },
    //   }
    // }
  
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}user/${userId}/billing-address`,
        {
            method: "PATCH",
            body: req.body,
            headers: {
            //   "Content-type": "application/x-www-form-urlencoded",
              'Authorization': `Bearer ${token}`,
            }
        }   
      );
        const data = await resp.json();
        // console.log({data: data});
        res.send(data);
      }
    