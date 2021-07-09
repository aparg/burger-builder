const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'linux9840215103',
    database:'burger'
})

let jsonParser=bodyParser.json()

app.post('/orders',jsonParser,(req,res)=>{
    console.log("posting")
    console.log(req.body)
    connection.query(`INSERT INTO orders VALUES(${Date.now()},${req.body.cheese},${req.body.bacon},${req.body.salad},${req.body.meat});`,
    (error,res)=>{
        if(error)throw error;
        console.log(res)
    })
})

app.get('/ingredients',(req,res)=>{
    let returnObject={}
    connection.query(`SELECT * FROM ingredients;`,(error,response)=>{
        if(error)throw error;
        response.forEach(el=>{
            returnObject[el.ingredient]=el.amount
        })
        console.log(returnObject)
        res.send(returnObject) 
    })
    
       
})

app.listen(4000,()=>{
    console.log("Listening in port 4000")
})