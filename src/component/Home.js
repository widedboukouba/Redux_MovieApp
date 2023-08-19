import React from 'react'
import Footer from './Footer'

export const Home = () => {
  return (
    <div>
<div className="top">
	<div className="coluumns">
		<div className="coluumn is-full featured_wraapper p-0">
			<img src="https://static.toiimg.com/photo/msid-96714656/96714656.jpg
			" className="featured"/>
			<div className="title_wraapper">
				<h1 style={{fontWeight:"900", fontFamily:"Tilt Prism",  color:"#d0daf7" , fontSize:"80px", marginBottom:"-190px"}}>Home Movie</h1>
				<p  className="ttt">Watching movies is a part of almost everyone’s life. They entertain us, teach us lessons, and even help us socialize by giving us topics to talk about with others. As long as movies have been produced, everyone has patronized them. </p>
				<button className='butt'>Watch It Now</button>
			</div>
		</div>
	</div> </div>
	<Footer/>
</div>

  )
}

export default Home