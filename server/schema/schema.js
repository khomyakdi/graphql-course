const graphql = require('graphql');
const Book = require('../models/book');
const Author = require('../models/Author');

const dummyBooks = [
  {
    name: 'Lorem ipsum dolor 11111111',
    genre: 'Fantasy',
    id: '1',
    authorId: '1',
  },
  {
    name: 'Lorem ipsum dolor 22222222',
    genre: 'Fantasy',
    id: '2',
    authorId: '1',
  },
  {
    name: 'Lorem ipsum dolor 333333333',
    genre: 'Sci-Fi',
    id: '3',
    authorId: '2',
  },
];

const dummyAuthors = [
  { name: 'Patrick 1', age: 42, id: '1' },
  { name: 'Patrick 2', age: 43, id: '2' },
  { name: 'Patrick 3', age: 2, id: '3' },
];

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent) {
        return dummyAuthors.find(author => author.id === parent.authorId);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return dummyBooks.filter(book => book.authorId === parent.id);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const searchedBook = dummyBooks.find(book => book.id === args.id);
        return searchedBook;
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const searchedAuthor = dummyAuthors.find(
          author => author.id === args.id
        );
        return searchedAuthor;
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return dummyBooks;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return dummyAuthors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
