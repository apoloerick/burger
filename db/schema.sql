  ### Schema

USE al5izr8ypgniv3n3;

CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (255) NOT NULL,
devoured BOOL default false,
date TIMESTAMP,
PRIMARY KEY(id)
);
