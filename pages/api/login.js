import FormData from 'form-data';
export default async function Login(req, res) {

    let formD = new FormData();
    formD.append('email', req.body.email);
    formD.append('password', req.body.password);
    
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}login`,
    {
        body: formD,
        method: "POST",
        headers: {
        // "Content-type": "application/json;charset=UTF-8",
        }
    }   
  );
  const data = await resp.json();
  res.send(data);


  }
  