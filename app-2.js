const express = require("express");
const app = express();
//burda cagrilma yeri vacibdir eger ana sehifeni ilk cagirsaq o zaman neye
// kecsede anasehife gelir ana sehife hemise sonda

// bu hisse routes e aiddir
app.use("/products", function (req, res) {
  res.send("products");
});

app.use("/menu/:id", function (req, res) {
  res.send("menu details " + req.params.id);
});
app.use("/menu", function (req, res) {
  res.send("menu");
});

app.use("/", function (req, res) {
  res.send("anasehife");
});

app.listen(3002, () => {
  console.log("Listining on port 3002");
});
