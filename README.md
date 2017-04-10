# Angular Exercise - Johan Jooste
This exercise serves the purpose of illustrating basic Angular skills and principles. 
As this is a MEAN stack solution, the backend is a NodeJS API with MongoDB used for the database.

To get the solution running with docker use the docker-compose defined in the root folder. 
The Angular application is configured to communicate with the API on http://192.168.99.100:3000 and 
the NodeJS API looks for the MongoDB connection on http://192.168.99.100:27017
so running the docker composition on the default docker machine should be straight-forward.

To alter the Angular App's reference to the API, go to the config.service.ts file @ AbsaExercise.Public/src/app/shared/config/.
To alter the NodeJS API's reference to the MongoDB database, go to the database.js file @ AbsaExercise.API/config/.
