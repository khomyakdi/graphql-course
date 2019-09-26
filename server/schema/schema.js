const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLOSchema,
} = graphql;

const BookType = newGraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db / other source
      }
    },
  },
});

module.exports = new GraphQLOSchema({
  query: RootQuery,
});