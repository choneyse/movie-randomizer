import React from 'react';

function Movie(props) {
    const movies = props.movies;
    return (
      <div className="movie">
          <h1>{movies.title}</h1>
          <h2>{movies.service}</h2>
      </div>
    );
  }
  
  export default Movie;