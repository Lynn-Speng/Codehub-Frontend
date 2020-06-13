export default (req, res) => {
    res.statusCode = 200;
    console.log("Here's api courses");
    // console.log(res);
    res.json(
        Array(30).fill().map((_, i) => (
            {
                id: i,
                title: "C++ Starter",
                description: "Ullamco ea occaecat deserunt veniam officia id sint id aliquip nulla.",
                cover: "/Course-Cover.jpg"
            }
        )))
  }
  