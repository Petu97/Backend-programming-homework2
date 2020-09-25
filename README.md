# Backend-programming-homework2
Express testing with http request methods

This repository has to be cloned as a whole for the application to work.
This project uses 2 libraries(express for routing, and ejs for dynamic frontend)
Steps to take:

  1. Clone the repository
  2. Go to directory and run `npm install` to automatically install required libraries
  3. Run index.js with `node index.js`
  
## To test http requests on localhost:3000/messages/ with postman.
This application takes 2 types of header values: 'mi'- short for messageid and 'mc' for messagecontent, for example: `localhost:3000/messages/?mc=This is the original message&mi=1`     -POST request adds 'mi' -object to message list with the value of 'mc', the list structure looks like this: 'List[messageid] = "messagecontent"'. 

- POST adds new message to list
- GET returns value from the list
- PUT updates the value 
- DELETE deletes the value
