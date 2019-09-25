const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const BookType = newGraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: {type: GraphQLString },
    genre: { type: GraphQLString},
  }),
});