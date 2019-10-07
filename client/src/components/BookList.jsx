import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading)
    return <p>loading</p>

  if (error) {
    console.log(error);
    return <p>error</p>
  }

  return (
    <div>
      <ul id="book-list">
        {
          data && data.books.map(book => (
            <li key={book.id}>
              {book.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default BookList;
