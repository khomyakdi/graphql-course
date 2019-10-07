import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';

const AddBook = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  const authorsData = useQuery(getAuthorsQuery);

  const [addBook, { data }] = useMutation(addBookMutation);

  if (authorsData.loading)
    return <p>loading</p>

  if (authorsData.error) {
    console.log(authorsData.error);

    return <p>error</p>
  }

  const submitBook = e => {
    const newBook = {
      name,
      genre,
      authorId,
    };
    console.log(newBook);
    addBook({ variables: { ...newBook } });
    e.preventDefault();
  };

  return (
    <form id="add-book" onSubmit={submitBook}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onSelect={e => setAuthorId(e.target.value)} >
          {
            authorsData.data && authorsData.data.authors.map(author => (
              <option key={author.id} value={author.id}>{author.name}</option>
            ))
          }
        </select>
      </div>
      <button type="submit">+</button>

    </form >
  );
};

export default AddBook;
