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