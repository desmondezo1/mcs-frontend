export default async function addProduct(req, res){
    if (req.method !== 'POST' ) {
        res.status(400).json({msg : 'invalid-method'})
    }

    if ( !req.body) {
        res.status(400).json({msg : 'Values empty'})
    }


    const respData = await fetch(process.env.BACKEND_API_BASE_URL+"/products/create",{
        body: JSON.stringify(req.body.values),
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer '+req.body.token
        }
    });

    let dataApi = await respData.json();
    console.log(respData);
    res.status(200).json(dataApi);

    
}