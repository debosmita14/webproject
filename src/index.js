const express= require("express");
const path= require("path");
const app= express();
//console.log(path.join(__dirname,"../public"));
// const spath=path.join(__dirname,"../public");
// app.use(express.static(spath));
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"Oops page doesnt exist",
    })
})
app.listen(8000,()=>{
    console.log("Listening to port number 8000");
})