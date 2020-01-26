CREATE DATABASE tamuhack_database;
CREATE TABLE tamuhack_database.collection
(
    ID int DEFAULT 0,
    GMessage varchar(500),
    MessageID varchar(500),
    Flag boolean DEFAULT FALSE,
    PRIMARY KEY(ID)
);
Insert Into collection
VALUES(a,a,FALSE);