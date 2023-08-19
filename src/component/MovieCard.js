import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const MovieCard = ({movie}) => {
    console.log(movie)
  return (
    <Link to={`/trailer/${movie.id}`}>
    <div className='kk'>
      <Card style={{ width: '18rem', margin: '10px'}}>
      <Card.Img variant="top" src={movie.posterurl} className="inform"/>
      <Card.Body style={{backgroundColor:''}}>
        <Card.Title className='title'>{movie.name}</Card.Title>
        <Card.Text style={{color:'white'}}>
         {movie.description}
        </Card.Text>
      </Card.Body>
      
      <Card.Body style={{backgroundColor:'rgb(19, 14, 24)'}}>
        <button variant="outline-info" className='bbbbb'>Watch Trailer</button>
       <div>
      <ReactStars  count={5} size={24} activeColor="#084298" edit={false} value={movie.rating}/>
      </div>,
      </Card.Body>
    </Card>    
    </div>
    </Link>
  );
}

export default MovieCard