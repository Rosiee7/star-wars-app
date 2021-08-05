import React, {useState} from 'react';
import './App.css';
import mockData from './mock';
import MoviesItems from './MoviesItems';
import MovieDetails from './MovieDetails';

function App() {

  const [currentMovie, setCurrentMovie] = useState();
  const onMovieClick = (movie: any) =>{
    setCurrentMovie(movie);
  };

  return (
    <div className="App">
      <MoviesItems movies={mockData.results} onClick={onMovieClick} />
      <MovieDetails data={currentMovie} />
    </div>
  );
}

export default App;
