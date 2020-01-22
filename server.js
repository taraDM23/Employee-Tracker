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
      message: "Would you like to do?",
      choices: [
        "View employees",
        "View employees by department",
        "View employees by position",
        "View employees by Manager",
        "Add new employee",
        "Add new position",
        "Add new department",
        "Update an Employees Role",
        "Remove Employee",
        "Exit"]
    })

    .then(function (answer) {
      switch (answer.action) {
        case "View employees":
          post();
          break;
        case "View employees by department":
          put();
          break;
        case "View employees by position":
          put();
          break;
        case "View employees by Manager":
          put();
          break;
        case "Add new employee":
          put();
          break;
        case "Add new position":
          put();
          break;
        case "Add new department":
          put();
          break;
        case "Update an Employees Role":
          put();
          break;
        case "Remove Employee":
          put();
          break;
        case "Exit":
          console.log("Have a Nice Day \n");
          connection.end();
          break;
      }
    });
};



