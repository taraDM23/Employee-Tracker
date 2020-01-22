var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee_db"
});


connection.connect(function (err) {
  if (err) throw err;
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "getPostPut",
      type: "list",
      message: "Would you like to View, add or Update an employee's Information?",
      choices: ["Add New", "Update", "View", "Delete", "Exit"]
    })
    .then(function (answer) {

      if (answer.getPostPut === "Add New") {
        post();
      }
      else if (answer.getPostPut === "Update") {
        put();
      }
      else if (answer.getPostPut === "View") {
        get();
      }
      else if (answer.getPostPut === "Delete") {
        destroy();
      }
      else {
        connection.end();
      }
    });
}
