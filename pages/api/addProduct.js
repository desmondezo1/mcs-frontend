export default async function addProduct(req, res){
    if (req.method !== 'POST' ) {
        res.status(400).json({msg : 'invalid-method'})
    }

    if ( !req.body) {
        res.status(400).json({msg : 'Values empty'})
    }

    const respData = await fetch(`${process.env.BACKEND_API_BASE_URL}/admin/products/create`,{
        body: req.body,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + req.query.v,
          }
    }).then(r => {
        console.log(r);
        return r.json()
    }).then(r =>{
        res.send(r)
    });

}