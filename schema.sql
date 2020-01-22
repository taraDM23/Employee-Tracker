DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department
(
	id INT NOT NULL,
	department_name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role
(
	id INT NOT NULL,
	title varchar(30) NOT NULL,
	salary DECIMAL NOT NULL,
	department_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee
(
	id INT NOT NULL,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  /* manager_id INT, */
	PRIMARY KEY (id),
)


