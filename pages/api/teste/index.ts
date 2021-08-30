export default function handler(req, res) {
    console.log(req.headers);
    const headers = req.headers;
    

    headers.hasOwnProperty('x-teste-slug');

    res.status(200).json({"teste": headers['x-teste-slug']})
}
  