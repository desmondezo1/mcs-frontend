// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

   let result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}product/downloadpdf`,{
            method: 'POST',
            body: req.body
        }
    );

    result = await result.json();
    console.log(result);

    res.send(result);
}
  