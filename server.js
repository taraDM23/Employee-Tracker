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
      name: "action",
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
          viewEmployee();
          break;
        case "View employees by department":
          viewEmployeeDept();
          break;
        case "View employees by position":
          viewEmployeeRole();
          break;
       /*  case "View employees by Manager":
          viewEmployeeManager();
          break; */
        case "Add new employee":
          addEmployee();
          break;
        case "Add new position":
          addRole();
          break;
        case "Add new department":
          addDepartment();
          break;

        case "Update an Employees Role":
          updateEmp();
          console.log ("hamburgers")
          break;

        case "Remove Employee":
          destroy();
          break;
        case "Exit":
          console.log("Have a Nice Day \n");
          connection.end();
          break;
      }
    });
};
//===================== Add New Employee ======================================
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the employees first name?"
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the employees last name?"
      },
      {
        name: "id",
        type: "input",
        message: "What is the employee's identification number?"
      },
      {
        name: "role_id",
        type: "input",
        message: "What is the position identification you would like to submit?"
      }
      /* 
           {    
             name: "manager",
             type: "input",
             message: "If applicable enter the relevant team manager?"
           }, */
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          id: answer.id,
          role_id: answer.role_id
        },
        function (err) {
          if (err) throw err;
          console.log("New Position Submitted successfully!");
          start();
        }
      );
    })
}


//===================== Add New Department ======================================
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department_name",
        type: "input",
        message: "What is the department name you would like to submit?"
      },
      {
        name: "id",
        type: "input",
        message: "What is the department id you would like to submit?"
      }
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          department_name: answer.department_name,
          id: answer.id,
        },
        function (err) {
          if (err) throw err;
          console.log("New Department Submitted successfully!");
          start();
        }
      );
    })
}

//===================== Add New Role ======================================
function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the position title you would like to submit?"
      },
      {
        name: "id",
        type: "input",
        message: "What is the position id you would like to submit?"
      },
      {
        name: "salary",
        type: "input",
        message: "What is the position salary you would like to submit?"
      },
      {
        name: "department_id",
        type: "input",
        message: "What is the department identification for this role?"
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          id: answer.id,
          salary: answer.salary || 0,
          department_id: answer.department_id
        },
        function (err) {
          if (err) throw err;
          console.log("New Position Submitted successfully!");
          start();
        }
      );
    })
}

//===================== View Employee ======================================
//===================== View Sorted by Employee title/role ======================================
//===================== View Sorted by Employee department  ======================================
//===================== Update an Employees Role ======================================
//===================== Remove an Employee ======================================
