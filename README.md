# task-management-api

## SOFTWARE REQUIREMENTS
- Node.js v.19.6.0
- Express.js v.4.18.2
- MySQL v.10.4.27

## BEFORE USING
Please make sure that you have:
- Node.js installed (https://nodejs.org/)
- MySQL Installed and running locally

## HOW TO RUN THE APPLICATION
- Clone the project from github
	git clone MuhammadAmmar314/task-management-api.git
- Open the project that have been cloned
	cd task-management-api
- Install NPM dependencies
	npm install
- Write this to create the database
	node config/create_database.js
- Write this to create the table
	node config/create_table.js
- Write this to run the application
	npm start

## IMPLEMENTED ENDPOINTS:

Path  |  Method  |  Description
---|---|---
/tasks  |  GET  |  ListAllTasks
/tasks/:id  |  POST  |  CreateTask
/tasks/:id  |  GET  |  GetSpecifiedTaskById
/tasks/:id  |  PATCH  |  UpdateTask
/tasks/:id  |  DELETE  |  RemoveTask