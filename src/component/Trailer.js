import React from 'react'
import { Button } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';

const Trailer = ({ movies }) => {
    const params=useParams();
    const movie = movies.filter((el) => el.id == params.id)[0];
  return (
    <div style={{display:'flex', marginTop:'100px', justifyContent:'center'}}>
    <div className='card'>
      <img src={movie.posterurl}></img>
      <h1 style={{fontSize:'80px', color:"#35a5af" ,textDecoration:"strong"}}>{movie.name}</h1>
      <p style={{fontSize:'50px', color:"white" ,textDecoration:"strong"}}>{movie.description }</p>
      <ReactStars  count={5} size={24} activeColor="#06bbcc" edit={false} value={movie.rating} />
                <Button variant="primary" type="submit">
                Play trailer on YouTube
      </Button>
    </div>
    </div>
  )
}

export default Trailer