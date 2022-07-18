export default function handler(req, res) {
        const query = req.query;
        const { transid, orderid } = query;
        return res.status(200).json({transid,orderid});
}