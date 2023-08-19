import React from 'react';
import MovieCard from './MovieCard';
import MovieAdd from './MovieAdd';
import Footer from './Footer';
const MovieList = ({ movies, setmovies, text, rate }) => {
  return (
   <div>
    <h1  style={{ fontFamily:'Bangers', color:'#adb5bd', fontSize:'80px', textShadow: '3px 5px 2px rgba(0, 0,0,0.15)'}}>Movie List</h1>
    <div className='box'>
   
        {movies
        .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()) && 
        el.rating >= rate
        ) 
        .map((el) => <MovieCard movie={el} />)
        .reverse()}
    <MovieAdd movies={movies} setmovies={setmovies} />
   </div>
   <Footer/>
   </div>
  
  );
}

export default MovieList