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
  
  connection.connect(function(err) {
    if (err) throw err;
    mainMenu();
  });

function mainMenu(){
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
                name: "View Departments",
                value: "viewDept"
              },
            {
              name: "View Employees By Department",
              value: "viewEmployeesByDept"
            },
            {
              name: "View Employees By Manager",
              value: "viewEmployeesByManager"
            },
            {
              name: "Add an Employee",
              value: "addEmployee"
            },
            {
              name: "Update Employee Role",
              value: "updateEmployeeRole"
            },
            {
              name: "Update Employee Manager",
              value: "updateEmployeeManager"
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
      .then(function(response){
          console.log(response)

        //user data, what do I do with it?
        switch(response.choice) {
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
              case "viewEmployeesByManager":
              // code block
              console.log("works")
              // Come back to
              viewByManager()
              break;
              case "addEmployee":
              // code block
              console.log("works")
              addEmployees()
              break;
              case "updateEmployeeRole":
              // code block
              console.log("works")
              addRoles()
              break;
              case "updateEmployeeManager":
              // code block
              console.log("works")
              addManager()
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
              case "quit":
              // code block
              console.log("works")
              ()
              break;
            default:
              // code block
          }
        //
      });
}
function viewByManager(){
    //map, key value pair ... associate key =unique data value= what the user will see (first + last)
    // connection.query("SELECT first_name, last_name, manager_id FROM employee", function(err, res) {
    //     if (err) throw err;
    //     // Log all results of the SELECT statement
    //     console.table(res);
    //     connection.end();
    //   });
    //use inquirer to ask which manager id
    //lookUpManger(response.choice)
}
// lookUpManger(1);

function lookUpManger(id){
    connection.query("SELECT * FROM employee where manager_id="+id+"", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        connection.end();
      });

}


function addDepartment(){

}

function addRoles(){
    
}

function addManager(){

}

function addEmployees(){

}

function viewRoles(){
connection.query("SELECT * FROM role", function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.table(res);
          connection.end();
          mainMenu()
        });
}

function viewDepartment(){
    // console.log("Selecting all Employees...\n");
        connection.query("SELECT * FROM department", function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.table(res);
          connection.end();
          mainMenu()
        });
}

function viewEmployees(){
        console.log("Selecting all Employees...");
        connection.query("SELECT * FROM employee", function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.table(res);
          connection.end();
          mainMenu()
        });
    
}


//mainMenu()