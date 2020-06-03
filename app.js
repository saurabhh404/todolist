const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

const items = [];
const workItems = [];

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("list", {
    listTitle: day,
    newItems: items
  });
});

app.post("/", function(req, res) {
  const item = req.body.nextItem;
  if (req.body.submit === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newItems: workItems
  });
});

app.post("/work", function(req, res) {});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, console.log("Server running at http://localhost:3000/"))
