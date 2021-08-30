export default function handler(req, res) {
    console.log(req.headers);
    const headers = req.headers;

    res.status(200).json(headers)
}
  