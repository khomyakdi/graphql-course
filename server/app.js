const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const PORT = 4000;
const MONGODB_CONNECTION_STRING = 'momongodb://localhost:27017/gql-ninja';

const app = express();

mongoose.connect(MONGODB_CONNECTION_STRING, () => {
  console.log('connected');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`server is started on port ${PORT}`);
});
