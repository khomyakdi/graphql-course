const graphql = require('graphql');

const dummyBooks = [
  { name: 'Lorem ipsum dolor 11111111', genre: 'Fantasy', id: '1' },
  { name: 'Lorem ipsum dolor 22222222', genre: 'Fantasy', id: '2' },
  { name: 'Lorem ipsum dolor 333333333', genre: 'Sci-Fi', id: '3' },
];

const { GraphQLObjectType, GraphQLString, GraphQLOSchema } = graphql;

const BookType = new GraphQLObjectType({
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
        const searchedBooks = dummyBooks.find(book => book.id === args.id);
        return searchedBooks;
      },
    },
  },
});

module.exports = new GraphQLOSchema({
  query: RootQuery,
});
