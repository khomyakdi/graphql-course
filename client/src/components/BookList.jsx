import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetail';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);
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
            <li key={book.id} onClick={() => setSelected(book.id)}>
              {book.name}
            </li>
          ))
        }
      </ul>
      <BookDetails id={selected} />
    </div>
  );
};

export default BookList;
