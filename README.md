# Angular Exercise - Johan Jooste
This exercise serves the purpose of illustrating basic Angular skills and principles. 
As this is a MEAN stack solution, the backend is a NodeJS API with MongoDB used for the database.

## Getting Started
To get the solution running with docker use the docker-compose defined in the root folder. The Angular application is configured to communicate with the API on http://localhost:3000 and the NodeJS API looks for the MongoDB connection on http://database:27017
so running the docker composition should be straight-forward, unless using docker quick start (this will require the addresses to be changed to the relevant IP addresses or URL's used).

To alter the Angular App's reference to the API, go to the config.service.ts file @ AbsaExercise.Public/src/app/shared/config/.
To alter the NodeJS API's reference to the MongoDB database, go to the database.js file @ AbsaExercise.API/config/.

## Using the Application
To get started, first create an account by registering with a username and password (Register link on top right of page). Passwords must be at least 6 characters long. No name, surname, email or cell-phone fields need to be captured for registration. After registration, the user will be automatically logged in. If previously registered, navigate to the login page (link on top right of page) and log in using your username and password. 

Once logged in, the user will be automatically navigated to the create-member component. To view a list of existing members, navigate to the list-members component using the first link in the top navigation bar. To edit a member, click the "edit" link on the end of the relevant row in the members table. To create a new member, click on the "New Member" button above the Members table.

To log out, simply click on the "Log Out" link on the top right of the page.

## Additional Functionality
The alert button below the Members table serves no purpose other than to illustrate the use of @Input and @Output properties in the shared button component. The same shared component is used for the "New Member" button above the Members table.

## Using IE, Firefox or Older Browsers
For the application to work on Internet Explorer or Firefox, be sure to edit the polyfill.ts file @ AbsaExercise.Public/src by un-commenting the relevant import statements and installing the relevant files.
