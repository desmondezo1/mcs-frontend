export default function handler(req, res) {
    const query = req.query;
    const { transid, orderid } = query;
    return {
        redirect: {
           destination: '/shop?m=failed',
           permanent: false,
        },
     }
   
}