import React from 'react';
import MovieCard from './MovieCard';
import MovieAdd from './MovieAdd';
const MovieList = ({ movies, setmovies, text, rate }) => {
  return (
   <div>
    <h1  style={{ fontFamily:'Bangers', color:'#35a5af', fontSize:'80px', textShadow: '3px 5px 2px rgba(0, 0,0,0.15)'}}>MovieList</h1>
    <div className='box'>
   
        {movies
        .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()) && 
        el.rating >= rate
        ) 
        .map((el) => <MovieCard movie={el} />)
        .reverse()}
    <MovieAdd movies={movies} setmovies={setmovies} />
   </div>
   </div>
  
  );
}

export default MovieList