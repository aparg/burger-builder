const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
require("dotenv").config();

try {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PSWD,
    database: process.env.DATABASE,
    port: process.env.PORT || 3306,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} catch (err) {
  console.log("Db not connected");
  console.log(err);
}
let jsonParser = bodyParser.json();

app.get("/", (req, res) => {
  res.send("<h1>API FOR THE BURGER APP<h1>");
});

app.post("/orders", jsonParser, (req, res) => {
  connection.query(
    `INSERT INTO orders VALUES(${Date.now()},${req.body.cheese},${
      req.body.meat
    },${req.body.bacon},${req.body.salad});`,
    (error, response) => {
      if (error) throw error;
      res.status(200).end();
    }
  );
});

app.post("/logincredentials", jsonParser, (req, res) => {
  connection.query(
    `SELECT COUNT(username) FROM credentials WHERE username="${req.body.uname}" AND password="${req.body.pswd}"`,
    (error, response) => {
      if (response[0]["count(username)"] == 1) res.send("$#*LOGGEDIN*$#");
      else res.send(false);
    }
  );
});

app.get("");

app.get("/ingredients", (req, res) => {
  let returnObject = {};
  connection.query(
    `SELECT * FROM ingredients ORDER BY ingredient_no;`,
    (error, response) => {
      if (error) throw error;
      response.forEach((el) => {
        returnObject[el.ingredient] = el.amount;
      });
      res.status(200).send(returnObject);
    }
  );
});

app.get("/display", (req, res) => {
  let ordersArray = [];
  let newObject = {};
  connection.query(`SELECT * FROM orders;`, (error, response) => {
    if (error) throw error;
    response.forEach((el) => {
      newObject.order_id = el.order_id;
      newObject.cheese = el.cheese;
      newObject.meat = el.meat;
      newObject.bacon = el.bacon;
      newObject.salad = el.salad;
      ordersArray.push({ ...newObject });
    });
    res.status(200).send(ordersArray);
  });
});

app.listen(4000, () => {
  console.log("Listening in port 4000");
});
