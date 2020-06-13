export default (req, res) => {
  if (req.method === "POST") {
    console.log("Here's Server");
    console.log(req.body);
  }
  res.statusCode = 200;
  if (req.body.password === "123456") res.json({ msg: "success" });
  else res.json({ msg: "failed" });
};
