export default function handler(req, res) {
    console.log(req.headers);
    res.status(200).json({headers:req.headers})
}
  