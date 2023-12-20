console.log("hello world ")


import http from "http"
import fs from "fs"
const Port=3000 



http.createServer((request,response)=>{
    response.end(`
    <h1>Hello Node!!!!</h1>
    <p>this is my first project node <br/> as a beginner </p>
    
    `);
}) .listen(Port , ()=> console.log("serveur running on http://localhost:" + Port));




fs.writeFile("welcome.txt", "Hello node" , (err)=>{
    if (err) throw err ;
    console.log("file is already created successfully")
})


fs.readFile("welcome.txt" ,"utf8" , (err,res)=>{
    if(err) throw err ; 
    console.log("data gettted from file successfully which is : ",res)

})