const express = require("express");
const app = express();
// const mysql = require("mysql");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
require("dotenv").config({ path: __dirname + "/.env" });
console.log(process.env.PORT);
const pool = new Pool({
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
  const client = await pool.connect();
  await client?.query(
    `INSERT INTO orders (order_id, cheese, meat, bacon, salad) VALUES (${Date.now()},${
      req.body.cheese
    },${req.body.meat},${req.body.bacon},${req.body.salad});`
  );
  await client.release();
  res.status(200).end();
});

app.post("/logincredentials", jsonParser, async (req, res) => {
  const client = await pool.connect();
  const response = await client?.query(
    `SELECT COUNT(username) FROM credentials WHERE username='${req.body.uname}' AND password='${req.body.pswd}'`
  );
  await client.release();
  if (response?.rows[0]["count"] == 1) res.send("$#*LOGGEDIN*$#");
  else res.send(false);
});

app.post("/deleteOrder", jsonParser, async (req, res) => {
  const client = await pool.connect();
  await client?.query(`DELETE FROM orders WHERE order_id='${req.body.id}'`);
  await client.release();
  res.status(200);
});
app.get("/ingredients", async (req, res) => {
  const client = await pool.connect();
  let returnObject = {};
  const response = await client?.query(
    `SELECT * FROM ingredients ORDER BY amount;`
  );
  await client.release();
  response?.rows?.forEach((el) => {
    returnObject[el.ingredient] = el.amount;
  });
  res.status(200).send(returnObject);
});

app.post("/display", async (req, res) => {
  const client = await pool.connect();
  let ordersArray = [];
  let newObject = {};
  try {
    const response = await client?.query(`SELECT * FROM orders;`);
    await client.release();
    response?.rows?.forEach((el) => {
      newObject.order_id = el.order_id;
      newObject.cheese = el.cheese;
      newObject.meat = el.meat;
      newObject.bacon = el.bacon;
      newObject.salad = el.salad;
      ordersArray.push({ ...newObject });
    });
    res.status(200).send(ordersArray);
  } catch (err) {
    await client.release();
    console.log(err);
    res.status(400);
  }
});

app.listen(4000, async () => {
  console.log("Listening in port 4000");
});
