DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),
  manager_id INT UNSIGNED,
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
);

USE employees_db;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Training'),
    ('Receptionist'),
    ('Maintenance');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Salesperson', 30000, 1),
    ('Personal Trainer', 50000, 2),
    ('Janitor', 21000, 4),
    ('Gym Maintenance', 45000, 4),
    ('Check-in Desk', 21000, 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Doe', 2, 1),
    ('Jeff', 'Thao', 3, NULL),
    ('Tupac', 'Shakur', 4, 3),
    ('Biggie', 'Smalls', 2, NULL),
    ('Snoop', 'Dogg', 1, 2),
    ('John', 'Legend', 4, NULL),
    ('Iceice', 'Baby', 3, 4);
