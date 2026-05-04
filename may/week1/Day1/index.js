// this is forn import the express from the library
const express = require("express");

// this is the creating the server
const MyServer = express();

// MyServer.use("/run",(req,res)=>{
//     res.send("hello")
// })

MyServer.get("/hii",(req,res)=>{
    res.send("bye bye");
})

MyServer.post("/create",(req,res)=>{
    res.send("post type of request")
})
MyServer.delete("/delete",(req,res)=>{
    res.send("del type of request")
})
MyServer.put("/update",(req,res)=>{
    res.send("upd type of request")
})

// run the server
MyServer.listen(8000,()=>{
    console.log("Hello My server is running ha ha ha...")
})


