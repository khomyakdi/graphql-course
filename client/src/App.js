import './App.css';
import React from 'react';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <h1>Reading list</h1>
      <BookList />
    </div>
  );
}

export default App;
