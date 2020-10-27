const inquirer = require("inquirer");
const mysql = require("mysql");
//const db = require("./db");
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "employees_db"
});

connection.connect(function (err) {
  if (err) throw err;
  mainMenu();
});

function mainMenu() {
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "viewEmployees"
        },
        {
          name: "View All Roles",
          value: "viewAllRoles"
        },
        {
          name: "View All Departments",
          value: "viewDept"
        },
        {
          name: "View Employees By Department",
          value: "viewEmployeesByDept"
        },
        {
          name: "Update Employee Role",
          value: "updateEmployeeRole"
        },
        {
          name: "Add an Employee",
          value: "addEmployee"
        },
        {
          name: "Add a Role",
          value: "addRole"
        },
        {
          name: "Add Department",
          value: "addDept"
        },
        {
          name: "Quit",
          value: "quit"
        }
      ]
    }
  ])
    .then(function (response) {
      console.log(response)

      //user data, what do I do with it?
      switch (response.choice) {
        case "viewEmployees":
          viewEmployees();
          break;
        case "viewAllRoles":
          // code block
          console.log("works")
          viewRoles()
          break;
        case "viewDept":
          // code block
          console.log("works")
          //   Not sure if this function is correct viewDepartment()
          break;
        case "viewEmployeesByDept":
          // code block
          console.log("works")
          viewDepartment()
          break;
        case "updateEmployeeRole":
          // code block
          console.log("works")
          addRoles()
          break;
        case "addEmployee":
          // code block
          console.log("works")
          addEmployees()
          break;
        case "addRole":
          // code block
          console.log("works")
          addRoles()
          break;
        case "addDept":
          // code block
          console.log("works")
          addDepartment()
          break;
        default: quit();
        // code block
      }

    });
}

function addDepartment() {

}

function addRoles() {
  inquirer.prompt([
      {
      type: "input",
      name: "role",
      message: "What is the new Role?"
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for this role?"
    }
  ]).then(function(answer){
    console.log("Updating all roles...\n");
    connection.query(
      "UPDATE role SET ? WHERE ?",
      [
        {
          title: answer.role
        },
        {
          salary: answer.salary
        }
      ],
      function (err, res) {
        if (err) throw err;
        console.log(res + " roles updated!\n");
      }
    );
  })

}

function addManager() {

}

function addEmployees() {

}

function viewRoles() {
  console.log("Selecting all Rows...\n")
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    connection.end();
    mainMenu()
  });
}

function viewDepartment() {
  console.log("Selecting all Employees...\n");
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
    mainMenu()
  });
}

function viewEmployees() {
  console.log("Selecting all Employees...\n");
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
    mainMenu()
  });
}


//mainMenu()