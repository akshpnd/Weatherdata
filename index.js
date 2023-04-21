const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const https = require("https"); 

app.use(bodyparser.urlencoded({extended:true}));

app.listen( 3000,function(){
    
    console.log("server is running ");

});

app.get("/",function(req,res){
  
    res.sendFile(__dirname + "/index.html");

})

app.post("/weather",function(req,res){

    const lat = (req.body.num1);

    const lon = (req.body.num2);
    
    const url = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+lon+"&units=metric&appid=99c81c73dbbd478b75b629b8dfe43aa4";

    https.get(url,function(response){
    
       response.on('data',function(data){

        const wd = JSON.parse(data);
       
       const temp = wd.main.temp;
       
       const description = wd.weather[0].description;
       
       res.send("<h1>"+"the temperature of " + wd.name +  " is " + temp + " and weather is " + description +"</h1>");
       
       })


    })
    })