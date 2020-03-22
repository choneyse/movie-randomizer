import React, {useState} from 'react';
import { movies } from './data/movies';
import Movie from './components/Movie';
import './App.css';

function App() {
  const randomNumber = () => {
    return Math.floor(Math.random() * (movies.length  - 0));
  }
  const [movieIndex, setMovieIndex] = useState(randomNumber())

  const buttonClick = () => {
    console.log()
  }

  return (
    <div className="App">
      <Movie movies={movies[movieIndex]} />
      <button onClick={() => setMovieIndex(randomNumber)}>Randomize</button>
    </div>
  );
}

export default App;
