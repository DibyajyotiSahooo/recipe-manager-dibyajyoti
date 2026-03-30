
CREATE DATABASE recipe_db;
USE recipe_db;

CREATE TABLE users(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 diet VARCHAR(50)
);

CREATE TABLE recipes(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 cuisine VARCHAR(100),
 ingredients TEXT,
 type VARCHAR(50),
 rating INT
);
