const express = require("express");
const graphqlHTTP = require("express-graphql");

const PORT = 4000;

const app = express();

app.use("/graphql", graphqlHTTP({}));

app.listen(PORT, () => {
  console.log(`server is started on port ${PORT}`);
});