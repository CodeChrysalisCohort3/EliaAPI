# Elia's API Solo Project
Project completed in January 2018. 

# Objectives
- Create a CRUD API service using Express, Knex, and Postgres
- Use test-doubles from Mocha or Jasmine to test your code
- Seed your database with interesting data
- Be able to document your API endpoints for other developers to use
- Create a Basic/Simple Frontend e.g. API Documentation

# Summary
- You have one weekend to create an MVP (minimum viable product)
- You will be doing a quick, 5 minute presentation of your API on Monday morning

# Basic Requirements
- A script that will set up and seed a database
- An Express server that:
     - serves up a basic HTML file that describes your API service
     - has a create endpoint for adding to your database (POST)
     - has a read endpoint for reading from your database (GET)
     - has an update endpoint for editing to your database (EDIT)
     - has a delete endpoint for deleting from your database (DELETE)
- A basic HTML file that gets served up. It should have the name of your API and link to your API's GitHub folder
- Migration files
- Tests with usage of test-doubles
- Documentation in the form of a README.md file
- A 2-3 minute presentation and demo

# Advanced Requirements
- Deployed on Heroku (optional)

# Setup
- Git clone repo from github located here:
https://github.com/CodeChrysalisCohort3/eliapi.git
- Install node and yarn if you don't have it already in terminal with command:

- Install knex with command: 
yarn i knex -g

- Install postgres for PSQL with command: 
yarn install pg

-Install dependencies/
yarn i

-Setup folder structure shown in cloned repo/
-Add a migration file with command:
yarn 

-Run a new migration file with command:
npm run migrate

-If need to rollback a migration (reverse a setup to previous one):
npm run rollback

-Setup/run tests with command:
yarn test

-To run the app:
npm start


# Running CRUD tests
- In Postman, navigate to a new tab, and put in the url:
  - localhost:3000/api/channels

# CREATE (also known as POST)
- Change tab on left to POST
- In the body field below, select "raw" and drop down on right to "JSON (application/json)
- In the body field, put a test object like below and make sure you are referencing a valid table entry:
  - {"name": "testName"}
- Click on "SEND" on top right when ready.
- If updated correctly, the response text below in Postman will have object like this:
 {
    "id": #,
    "name": "testName"
}
- Now go back into PSQL and view the table and see if the value is updated.

# READ (also known as GET)
- Change tab on left to GET
- In the body field below, select "raw" and drop down on right to "JSON (application/json)
- Click on "SEND" on top right when ready.
- If sent correctly, the response text below in Postman will have array of objects like below:
[
    {
        "id": 52,
        "name": "updatedvalue",
        "createdAt": "Invalid date"
    },
    {
        "id": 53,
        "name": "insertedvalue",
        "createdAt": "Invalid date"
    }
]
- Now go back into PSQL and view the table and see if the values match from GET request.

# UPDATE (also known as PUT)
- Change tab on left to PUT
- In the body field below, select "raw" and drop down on right to "JSON (application/json)
- In the body field, put a test object like below and make sure you are referencing a valid table entry:
  - {"OldName": "lowervalue", "newName": "TESTvalue"}
- Click on "SEND" on top right when ready.
- If updated correctly, the response text below in Postman will say "[object Object] is updated".
- Now go back into PSQL and view the table and see if the value is updated.

# DELETE
- Change tab on left to DELETE
- In the body field below, select "raw" and drop down on right to "JSON (application/json)
- In the body field, put a test object like below and make sure you are referencing a valid table entry:
  - {"name": "insertedvalue"}
- Click on "SEND" on top right when ready.
- If deleted correctly, the response text below in Postman will say "insertedvalue is deleted".
- Now go back into PSQL and view the table and see if the value is deleted.
