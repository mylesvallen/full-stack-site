DROP DATABASE IF EXISTS propertymgt_db; 
CREATE DATABASE propertymgt_db; 

USE propertymgt_db; 

CREATE TABLE property (
	id int NOT NULL AUTO_INCREMENT, 
	property_name VARCHAR(50) NOT NULL, 
	tenant_name VARCHAR(50) NOT NULL, 
	tenant_rating INT (10) NOT NULL, 
	tenant_comment VARCHAR(100) NOT NULL,
	date TIMESTAMP,
	PRIMARY KEY (id)
);  

CREATE TABLE new_account (
	id int NOT NULL AUTO_INCREMENT, 
	tenant_name VARCHAR(50) NOT NULL, 
    tenant_email VARCHAR(50) NOT NULL, 
	property_name VARCHAR(50) NOT NULL, 
	username VARCHAR(15) NOT NULL, 
    password VARBINARY (15) NOT NULL,
	PRIMARY KEY (id)
); 