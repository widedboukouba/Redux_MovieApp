import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const Navbar = ({ settext , setrate }) => {
  return (
    <div>
    < ul className='menu-bar'>
        <li className=''> <img src='a.png' alt='logo' className='image' ></img></li>
        <li className='lii'><Link to={"/abouut"}  style={{textDecoration:'none', color:'#06bbcc', fontSize:'20px'}}>About</Link></li> 
 <li className='lii'><Link to={"/movielist"} style={{textDecoration:'none', color:'#06bbcc', fontSize:'20px'}}>Movies</Link></li> 
 <li className='lii'> <Link to={"/contact"}  style={{textDecoration:'none', color:'#06bbcc', fontSize:'20px'}}>Contact</Link></li> 
 <li className='lii'><Link to={"/description"}  style={{textDecoration:'none', color:'#06bbcc', fontSize:'20px'}}>Description</Link> </li>

 <li>

      <ReactStars  count={5} size={24} activeColor="#06bbcc"  onChange={(newRating) => setrate(newRating)} />
    
<div className='search-box'>
    <button className="btn-search"><i className='fas fa-search'></i></button>
    <input type="text" className="input-search" placeholder="Search" onChange={(e) => settext(e.target.value) } ></input>
    </div>
    </li>
    </ul>
 
 </div>



  )
}

export default Navbar 