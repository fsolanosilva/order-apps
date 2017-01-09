-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
  SELECT name
   FROM sys.databases
   WHERE name = N'ForteGroup'
)
CREATE DATABASE [ForteGroup]
GO
USE [ForteGroup]
-- Create a new table called 'Users' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.Users', 'U') IS NOT NULL
DROP TABLE dbo.Users
GO
-- Create the table in the specified schema
CREATE TABLE dbo.Users
(
    Id INT NOT NULL PRIMARY KEY identity, -- primary key column
    Email [VARCHAR](125) NOT NULL UNIQUE,
    Pwd [VARCHAR](Max) NOT NULL,
    Name [VARCHAR](60) NOT NULL
);
GO
if (not exists (select 1 from dbo.Users where email = 'renato.matos79@gmail.com'))
begin
    insert into dbo.Users (Email, Pwd, Name) values ('renato.matos79@gmail.com', '1234', 'Renato Matos');
end;
GO
if (not exists (select 1 from dbo.Users where email = 'vfmatos78@gmail.com'))
begin
    insert into dbo.Users (Email, Pwd, Name) values ('vfmatos78@gmail.com', '1234', 'Vanessa Matos');
end;
GO
Select * from dbo.Users;