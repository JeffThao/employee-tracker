const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",


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
          name: "Exit",
          value: "exit"
        }
      ]
    }
  ])
    .then(function (response) {
      console.log(response)
      switch (response.choice) {
        case "viewEmployees":
          viewEmployees();
          break;
        case "viewAllRoles":
          viewRoles();
          break;
        case "viewDept":
          viewDepartment();
          break;
        case "viewEmployeesByDept":
          viewDepartment();
          break;
        case "updateEmployeeRole":
          addRoles();
          break;
        case "addEmployee":
          addEmployees();
          break;
        case "addRole":
          addRoles();
          break;
        case "addDept":
          addDepartment();
          break;
        default: 
        exit();
      }

    });
}

function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "What is the new Department?"
    }
  ]).then(function (answer) {
    console.log("Updating all department...\n");
    connection.query(
      "INSERT into department SET ?",
        {
          name: answer.department
        }
      ,
      function (err, res) {
        if (err) throw err;
        console.log("Department updated!\n");
        console.table(res);
        mainMenu();
      }
    );
  })
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
    },
    {
      name: "deptId",
      message: "What is the department ID?",
      type: "input"
    }
  ]).then(function (answer) {
    console.log("Updating all roles...\n");
    connection.query(
      "INSERT into role SET ?",
        {
          title: answer.role,
          salary: answer.salary,
          department_id: answer.deptId
        }
      ,
      function (err, res) {
        if (err) throw err;
        console.log("Roles updated!\n");
        console.table(res);
        mainMenu();
      }
    );
  })

}

function addEmployees() {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name?"
    },
    {
      name: "role_id",
      message: "What is the role ID?",
      type: "input"
    }
  ]).then(function (answer) {
    console.log("Adding Employee...\n");
    connection.query(
      "INSERT into employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id
        }
      ,
      function (err, res) {
        if (err) throw err;
        console.log("Roles updated!\n");
        console.table(res);
        mainMenu();
      }
    );
  })
}

function viewRoles() {
  console.log("Selecting all Roles...\n")
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu()
  });
}

function viewDepartment() {
  console.log("Selecting all Departments...\n");
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu()
  });
}

function viewEmployees() {
  console.log("Selecting all Employees...\n");
  connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id", function (err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu()
  });
}

function exit(){
  console.log("Logging out...\n");
  connection.end();
}
