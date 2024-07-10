CREATE DATABASE cosmos

USE cosmos;

DROP DATABASE Solar_System

CREATE TABLE solar_system(id INT AUTO_INCREMENT PRIMARY KEY , name VARCHAR(20) , oxigen BOOLEAN)

CREATE Table elias (brood VARCHAR(20) , 
`rank` VARCHAR(20),
 department INT,
 constraint fk_rank FOREIGN KEY (department) REFERENCES solar_system (id)
 )

SELECT * FROM elias;

INSERT INTO solar_system (name , oxigen) VALUES ("Mercury" , false);

INSERT INTO solar_system (name , oxigen) VALUES ("Venus" , false);

INSERT INTO solar_system (name , oxigen) VALUES ("Earth" , false);

INSERT INTO solar_system (name , oxigen) VALUES ("Mars", false);

INSERT INTO solar_system (name , oxigen) VALUES ("Jupiter" , FALSE);

INSERT INTO solar_system (name , oxigen) VALUES ("Saturn" , FALSE);

INSERT INTO solar_system (name , oxigen) VALUES ("Uranus" , FALSE);

INSERT INTO solar_system (name , oxigen) VALUES ("Neptune" , FALSE);

SELECT * FROM solar_system WHERE id >= 1;

SELECT * FROM solar_system WHERE oxigen = TRUE;

DELETE FROM solar_system WHERE id = 6;

SET @count = 0;

UPDATE solar_system SET id = @COUNT := @COUNT+1;

UPDATE solar_system SET oxigen = false where id = 2;

