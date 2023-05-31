const express = require("express");
const app = express();
const path = require("path");


app.set("view-engine", "ejs");
app.use(express.static(path.join(__dirname,'public')))
const checkTime = require("./middleware")

app.use(checkTime)

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/contact-us", (req, res) => {
  res.render("Contact-us.ejs");
});

app.get("/our-services", (req, res) => {
  res.render("Our-services.ejs");
});

app.set('port', (3005));


app.listen(3005,()=>console.log("server connected"));
