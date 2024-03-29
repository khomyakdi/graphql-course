import { gql } from 'apollo-boost';

export const getAuthorsQuery = gql`
{
  authors{
    id
    name
  }
}
`;

export const getBooksQuery = gql`
{
  books{
    id
    name
    genre
  }
}
`;

export const addBookMutation = gql`
mutation AddBook($name:String!,$genre:String!, $authorId:ID!){
  addBook(name:$name, genre: $genre, authorId:$authorId){
    id
    name
    genre
  }
}
`;
export const getBookQuery = gql`
query($id:ID!){
  book(id:$id){
    id
    name
    genre
    author{
      name
      age
      books{
        id
        name
      }
    }
  }
}
`;