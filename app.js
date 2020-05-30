const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get("/", function(req, res){
  var currentDay = new Date().getDay();
  if(currentDay === 6 || currentDay === 0){
    res.send("Yay! It's weekend!");
  } else{
    res.send("Nope, you HAVE to work today.")
  }
});


app.listen(3000, console.log("Server running at https://localhost:3000/"))
