const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
require('dotenv').config()

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.DATABASE_NAME,
    password:process.env.DATABASE_PSWD,
    database:process.env.DATABASE,
    port:process.env.PORT || 3306
})
let jsonParser=bodyParser.json()

app.get('/',(req,res)=>{
    res.send('YO')
})

app.post('/orders',jsonParser,(req,res)=>{
    connection.query(`INSERT INTO orders VALUES(${Date.now()},${req.body.cheese},${req.body.meat},${req.body.bacon},${req.body.salad});`,
    (error,res)=>{
        if(error)throw error
    })
})

app.get('/ingredients',(req,res)=>{
    let returnObject={}
    connection.query(`SELECT * FROM ingredients;`,(error,response)=>{
        if(error) throw error
        response.forEach(el=>{
            returnObject[el.ingredient]=el.amount
        })
        
        res.send(returnObject) 
    })       
})

app.get('/display',(req,res)=>{
    let ordersArray=[]
    let newObject={}
    connection.query(`SELECT * FROM orders;`,(error,response)=>{
        if(error) throw error
        response.forEach(el=>{
            newObject.order_id=el.order_id
            newObject.cheese=el.cheese
            newObject.meat=el.meat
            newObject.bacon=el.bacon
            newObject.salad=el.salad
            ordersArray.push({...newObject})
        }
        )
        res.send(ordersArray)        
    })

})

app.listen(4000,()=>{
    console.log("Listening in port 4000")
})
