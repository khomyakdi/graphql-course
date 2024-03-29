import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries';
import PropTypes from 'prop-types';


const BookDetails = ({ id }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id }
  });
  if (!id)
    return null;

  if (loading)
    return <p>loading</p>

  if (error) {
    console.log(id, error);
    return <p>error</p>
  }
  if (!data)
    return null;

  return (
    <div id="book-details">
      <h2>{data.book.name}</h2>
      <p>{data.book.genre}</p>
      <p>{data.book.author.name}</p>
      <p>All books by this author:</p>
      <ul className="other-books">
        {data.book.author.books.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  );
};

BookDetails.propTypes = {
  id: PropTypes.string,
};

export default BookDetails;
