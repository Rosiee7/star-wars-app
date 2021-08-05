import {useState, useEffect} from 'react';
import './App.css';
import MoviesItems from './MoviesItems';
import MovieDetails from './MovieDetails';

function App() {
  const SEARCH_API ="https://www.swapi.tech/api/films";  
  const [movies ,setMovies] = useState([]);

  useEffect(()=> {
    fetch(SEARCH_API)
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data.result);
    });
    
  } ,[]);

  const [currentMovie, setCurrentMovie] = useState();
  const onMovieClick = (movie: any) =>{
    setCurrentMovie(movie);
  };
  

  return <div className="App">
          <div className="Toc">
            <MoviesItems movies={movies} onClick={onMovieClick} />
          </div>
          <div className="Details" >
            <MovieDetails data={currentMovie} />
          </div>            
        </div>
}

export default App;
