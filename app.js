const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        fs.readFile("anasehife.htm", (err,html)=>{
            res.write(html)
            res.end()
        })
    } else if (req.url == "/mehsullar"){
         fs.readFile("mehsullar.htm", (err,html)=>{
            res.write(html)
            res.end()
        })
    }else{
        fs.readFile("404.htm", (err,html)=>{
            res.write(html)
            res.end()
        }) 
    }
})

server.listen(3333,()=>{
    console.log("rrr")
})