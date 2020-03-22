import React from 'react';

function Movie(props) {
    const movie = props.movie;
    const isActive = props.isActive;
    return (
      <div className={`movie ${isActive ? 'active' : ''}`}>
        <div className='content'>
            <p><b>{movie.title}</b><br />
            {movie.service}</p>
        </div>
      </div>
    );
  }
  
  export default Movie;