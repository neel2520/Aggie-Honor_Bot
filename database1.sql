CREATE DATABASE tamuhack_database;
CREATE TABLE tamuhack_database.collection
(
    ID int DEFAULT 0,
    GMessage varchar(500),
    MessageID varchar(500),
    Flag boolean DEFAULT FALSE,
    PRIMARY KEY(ID)
);

BULK INSERT tamuhack_database.collection
FROM "messages.csv"
WITH
(
  CODEPAGE = '1',
  FIELDTERMINATOR = ';',
  CHECK_CONSTRAINTS
);

SELECT * FROM tamuhack_database.collection WHERE Flag = TRUE;