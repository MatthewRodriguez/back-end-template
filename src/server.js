// Express is 
// REST API is an acronym for Representational State Transfer
// routes handlers: app.get, app.post, app.delete. All of this methods take two arguments
// The first argument "path", is basically the path which we want to listen on
// The second argument is callback argument 

import bodyParser from 'body-parser';
import express from 'express';
import { routes } from './routes'

const app = express();
// This will allow you to put the request body into the req variable on the callback argument
app.use(bodyParser.json())

routes.forEach(route => {
  app[route.method](route.path, route.handler);
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});