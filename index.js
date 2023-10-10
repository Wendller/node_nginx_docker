const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

connection.connect();

connection.query(
  "CREATE TABLE users (name VARCHAR(255))",
  function (error, results, fields) {
    if (error) throw error;
  }
);

connection.query(
  "INSERT INTO users(name) values('Wendler')",
  function (error, results, fields) {
    if (error) throw error;
  }
);

app.get("/", (req, res) => {
  connection.query("SELECT * FROM users", function (error, results, fields) {
    if (error) throw error;
    const user = results[0];

    res.send(
      `<h1>Full Cycle</h1> \n <ul><li>${user ? user.name : ""}</li></ul>`
    );
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
