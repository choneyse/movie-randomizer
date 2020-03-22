import React, {useState} from 'react';
import { movies } from './data/movies';
import Movie from './components/Movie';
import './App.css';

function App() {
  const randomNumber = () => {
    return Math.floor(Math.random() * (movies.length  - 0));
  }

  const isCurrentIndex = () => {
    return movieIndex === movies.indexOf(movieIndex);
  }

  const [movieIndex, setMovieIndex] = useState(randomNumber())

  const updateMovieIndex = () => {
    setMovieIndex(randomNumber)
  }

  return (
    <div className="App">
      <div className="movie-grid">
        {movies.map((movie, index) =>
          <Movie movie={movie} key={index} isActive={index === movieIndex} />
        )}
      </div>
      <button onClick={updateMovieIndex}>Randomize</button>
    </div>
  );
}

export default App;
