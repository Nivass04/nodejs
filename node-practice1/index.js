// const fs = require("fs");
// const http = require("http");
const express=require("express");
const app=express();
app.use(express.json());
// fs.readFile("f1.txt", "utf-8", (err, data) => {
//   if (err) {
//     return err.message;
//   } else {
//     console.log(data);
//   }
// });
// const update = "yeah im fine what about you";
// fs.writeFile("f2.txt", update, (err) => {
//   if (err) {
//     return err.message;
//   }
// });

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("helloworld");
// });


app.get("/time",(req,res)=>{
  res.send(new Date().toLocaleString())

})
app.listen(3000);
