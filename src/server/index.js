import render from "./render";

const express = require("express");
const app = express();3

app.use(express.static("./public"))

app.get("*",render);

app.listen(8080,()=>{
    console.log("litening to 8080 port....")
})
