import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getAuthorsQuery } from '../queries/queries';


const AddBook = () => {
  const authorsData = useQuery(getAuthorsQuery);
  if (authorsData.loading)
    return <p>loading</p>

  if (authorsData.error) {
    console.log(authorsData.error);
    return <p>error</p>
  }

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          {
            authorsData.data && authorsData.data.authors.map(author => (
              <option key={author.id} value={author.id}>{author.name}</option>
            ))
          }
        </select>
      </div>
      <button>+</button>

    </form>
  );
};

export default AddBook;
