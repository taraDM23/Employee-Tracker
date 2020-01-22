
INSERT INTO department (id ,department_name) VALUES ( 001 , 'Manitanance');
INSERT INTO department (id ,department_name) VALUES ( 002 , 'Accounting');
INSERT INTO department (id ,department_name) VALUES ( 003 , 'Management');
INSERT INTO department (id ,department_name) VALUES ( 004 , 'Technical Support');
INSERT INTO department (id ,department_name) VALUES ( 045 , 'IT Systems');


INSERT INTO employee (id, first_name, last_name ,	role_id) VALUES ( 007, 'Daniel', 'Craig', 22 );
INSERT INTO employee (id, first_name, last_name ,	role_id) VALUES ( 008, 'Pierce', 'Brosnan', 19 );
INSERT INTO employee (id, first_name, last_name, 	role_id) VALUES ( 009, 'Timothy' , 'Dalton', 22 );
INSERT INTO employee (id, first_name, last_name, 	role_id) VALUES ( 005, 'Sean', 'Connery' , 21 );


INSERT INTO role (id, title, salary, department_id) VALUES (19 , 'Engineer' , 50000 , 045 );
INSERT INTO role (id, title, salary, department_id) VALUES (20 , 'Accountant' , 60000 , 002);
INSERT INTO role (id, title, salary, department_id) VALUES (21 , 'Agent' , 45000 , 004);
INSERT INTO role (id, title, salary, department_id) VALUES (22 , 'Manager' , 60000, 003);
INSERT INTO role (id, title, salary, department_id) VALUES (23 , 'Labour' , 40000, 001);