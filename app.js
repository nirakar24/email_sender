const express = require("express");
const app = express();

const sendMail = require("./controllers/sendMail");

app.get("/",(req,res) => {
  res.send("It's a server");
});

app.get("/email",sendMail); 

const start = async () => {
  try{
    app.listen(5000, () =>{
      console.log("Port is live")
    })
  } catch(error) {}
};

start();
