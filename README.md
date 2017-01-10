# order-apps
Demo solution using .net core to auth and authorize users using JWT, node js api to allow client applications to create and find orders, search products and finally to React Web Client and Android studio solution to consume both apis. The solution was built using Visual Studio Code for any plataform, NodeJS, MongoDB and SQL Server 2016 express.

Let me introduce this repo:

- mongodb: 
contains some scripts do initialize some collectoins like users, products and orders.

- net-core-auth:
.net core api using Dapper ORM, SQL Server 2016 and Json Web Tokens (JWT) to authenticate users

- net-json-web-token:
windows forms application used to generate JWT only for simple tests

- node-js-orders
nodejs api to create and get orders and also with some routines to search products by ID and name. 
This API looks for the Access Token on header, query string or body during the requests.

- for the next commit
a. Android Studio Mobile Application showing how to auth, search products and create orders.
b. NET Core MVC showing how to consume the APIs mentioned before using SPA and React Components;

- Before start you must install
a. MongoDB
b. SQL Server 2016
c. .NET Core on Ubuntu

Setup MongoDB
=============
1. Import the public key
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

2. Create a list file for mongoDB
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

3. Reload local packages
sudo apt-get update

4. Install mongo
sudo apt-get install -y mongodb-org

5. Starting mongo
sudo service mongod start 

Obs: on Ubuntu 16 you can find the mongo config => "cat /etc/mongod.conf"
check the log and instances => "/var/lib/mongodb" and "/var/log/mongodb"

Setup SQL SERVER 2016
=====================
1. curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
2. curl https://packages.microsoft.com/config/ubuntu/16.04/mssql-server.list | sudo tee /etc/apt/sources.list.d/mssql-server.list
3. sudo apt-get update
4. sudo apt-get install -y mssql-server
5. sudo /opt/mssql/bin/sqlservr-setup
6. sudo service mssql-server start




