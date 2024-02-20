const express = require("express");
const app = express();
// const mysql = require("mysql");
const bodyParser = require("body-parser");
const { Client } = require("pg");
require("dotenv").config({ path: __dirname + "/.env" });
console.log(process.env.PORT);
const client = new Client({
  host: process.env.HOST,
  user: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PSWD,
  database: process.env.DATABASE,
  port: process.env.PORT || 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});
let jsonParser = bodyParser.json();

app.get("/", (req, res) => {
  res.send("<h1>API FOR THE BURGER APP<h1>");
});

app.post("/orders", jsonParser, async (req, res) => {
  await client?.connect();
  await client?.query(
    `INSERT INTO orders (order_id, cheese, meat, bacon, salad) VALUES (${Date.now()},${
      req.body.cheese
    },${req.body.meat},${req.body.bacon},${req.body.salad});`
  );
  await client?.end();
  res.status(200).end();
});

app.post("/logincredentials", jsonParser, async (req, res) => {
  await client?.connect();
  const response = await client?.query(
    `SELECT COUNT(username) FROM credentials WHERE username='${req.body.uname}' AND password='${req.body.pswd}'`
  );
  await client?.end();
  if (response?.rows[0]["count(username)"] == 1) res.send("$#*LOGGEDIN*$#");
  else res.send(false);
});

app.get("/ingredients", async (req, res) => {
  await client?.connect();
  let returnObject = {};
  const response = await client?.query(
    `SELECT * FROM ingredients ORDER BY amount;`
  );
  response?.rows?.forEach((el) => {
    returnObject[el.ingredient] = el.amount;
  });
  await client?.end();
  res.status(200).send(returnObject);
});

app.get("/display", async (req, res) => {
  let ordersArray = [];
  let newObject = {};
  try {
    await client?.connect();
    const response = await client?.query(`SELECT * FROM orders;`);
    response?.rows?.forEach((el) => {
      newObject.order_id = el.order_id;
      newObject.cheese = el.cheese;
      newObject.meat = el.meat;
      newObject.bacon = el.bacon;
      newObject.salad = el.salad;
      ordersArray.push({ ...newObject });
    });
    await client?.end();
    res.status(200).send(ordersArray);
  } catch (err) {
    console.log(err);
    await client?.end();
    res.status(400);
  }
});

app.listen(4000, async () => {
  console.log("Listening in port 4000");
});
