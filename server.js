const express = require("express");
const app = express();
const port = 4000
const morgan = require("morgan")  //logging of get requests in terminal

app.use(morgan("tiny"))

app.get("/", (req,res)=>
    {res.send("hello world")}
)

//New Route
app.get("/fruits/new",(req,res) => {
    res.render("new.ejs")
})

app.listen(port, () => {
  console.log("listening on " +port);
});