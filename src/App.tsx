import React from 'react';
import './App.css';
import mockData from './mock';
import MoviesNav from './MoviesNav';

function App() {
  console.log(mockData.results);

  return (
    <div className="App">
      <MoviesNav movies={mockData.results} />
    </div>
  );
}

export default App;
