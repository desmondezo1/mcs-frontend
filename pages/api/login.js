export default function Login(req, res){
    if (req.method !== 'POST' ) {
        res.status(400).json({msg : 'invalid-method'})
    }

    if ( !req.body) {
        res.status(400).json({msg : 'Values empty'})
    }

    
}