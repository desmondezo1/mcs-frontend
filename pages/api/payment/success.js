import FormData from 'form-data';

export default async function handler(req, res) {
        const query = req.query;
        const { transid, orderid } = query;
        let formD = new FormData();
        formD.append('order_status', 3 )
        formD.append('payment_status', 1 )

        const resp = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}order/${orderid}`,
                {
                    method: "PATCH",
                    body: formD,
                    headers: {
                      // "Content-type": "application/json;charset=UTF-8",
                      'Authorization': `Bearer ${token}`,
                    }
                }   
              ).then(re => { re.json()}).then(re => {
                if (re.status == 200) {
                  return {
                     redirect: {
                        destination: '/shop?m=success',
                        permanent: false,
                     },
                  }

                }
              });


        return res.status(200).json(resp);
}