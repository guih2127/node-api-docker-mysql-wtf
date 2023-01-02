CREATE DATABASE IF NOT EXISTS Pets;

USE Pets;

CREATE TABLE IF NOT EXISTS User(
       Id CHAR(36) PRIMARY KEY NOT NULL UNIQUE,
       Name VARCHAR(200) NOT NULL, 
       Email VARCHAR(200) NOT NULL,
       Password VARCHAR(1000) NOT NULL -- Ver se usa isso tudo mesmo
);

CREATE TABLE IF NOT EXISTS Animal(
       Id CHAR(36) PRIMARY KEY NOT NULL UNIQUE,
       Name VARCHAR(200) NOT NULL, 
       Species VARCHAR(200) NOT NULL,
       Breed VARCHAR(200) NOT NULL,
       Photo VARCHAR(500) NOT NULL,  -- Ver se usa isso tudo mesmo
       Adopted TINYINT(1) NOT NULL DEFAULT 0,
       UserId CHAR(36) NOT NULL,

       FOREIGN KEY (UserId) REFERENCES User(Id) 
);

INSERT IGNORE INTO User
VALUES (
       "f501e3e7-80a1-4e2f-a102-96b5f4c71ab5",
       "Usuário de teste",
       "email@email.com.br", 
       "123456"
);

INSERT IGNORE INTO Animal
VALUES (
       "b40c7db8-d8a3-4542-86f3-5519f5e50944",
       "Batata",
       "Dog",
       "Shih-tzu",
       "random link",
       1,
       "f501e3e7-80a1-4e2f-a102-96b5f4c71ab5"
);