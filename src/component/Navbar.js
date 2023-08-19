import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

export const Navbar = ({ settext , setrate }) => {
  return (
    <div>
    < ul className='menu-bar'>
        <li className=''> <Link to={"/"}><img src='a.png' alt='logo' className='image' ></img></Link></li>
       
        <li className='liio'><Link to={"/abouut"}  style={{textDecoration:'none', fontSize:'20px', fontFamily:"Tilt Prism"}}>About</Link></li> 
 <li className='liio'><Link to={"/movielist"} style={{textDecoration:'none', fontSize:'20px', fontFamily:"Tilt Prism"}}>Movies</Link></li> 
 <li className='liio'> <Link to={"/contact"}  style={{textDecoration:'none', fontSize:'20px', fontFamily:"Tilt Prism"}}>Contact</Link></li> 
 <li className='liio'><Link to={"/description"}  style={{textDecoration:'none', fontSize:'20px', fontFamily:"Tilt Prism"}}>Description</Link> </li>

 <li>

      
    
<div className='search-box'>
    <button className="btn-search"><i className='fas fa-search'></i></button>
    <input type="text" className="input-search" placeholder="Search" onChange={(e) => settext(e.target.value) } ></input>
    </div>
    </li><ReactStars  count={4} size={24} activeColor="#0b4eb3"  onChange={(newRating) => setrate(newRating)} />
    </ul>
 
 </div>



  )
}

export default Navbar 